import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useContext } from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";
import { toast } from "react-toastify";
import { MyContext } from "../../../Route/AuthProvider";
import Swal from "sweetalert2";

const ChackOutFrom = ({ data }) => {
  const { user } = useContext(MyContext);
  const { taka, limit } = data || {};
  const axiosSecure = AdminSecoure();
  const [errorText, setErrorPage] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const strip = useStripe();
  const elements = useElements();

  useEffect(() => {
    axiosSecure
      .post("/payment", { taka })
      .then((res) => setSecretKey(res.data.clientSecret));
  }, [axiosSecure, taka]);

  const handelChackOut = async (e) => {
    e.preventDefault();
    if (!strip || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await strip.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setErrorPage(error.message);
    } else {
      // console.log("succesfull payment : ",paymentMethod);
      setErrorPage("");
    }
    const { paymentIntent, err } = await strip.confirmCardPayment(secretKey, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "unNone name",
          email: user?.email || "unNone email",
        },
      },
    });
    if (err) {
      setErrorPage(err.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        const taka = paymentIntent.amount;
        const amount = { taka };
        await axiosSecure.post("/amount", amount);

        Swal.fire({
          title: "Congratulations !",
          text:`payment succesfull Your Transzation ID :${paymentIntent.id}`,
          icon: "success",
        });
    
        setErrorPage("");

        const { data } = await axiosSecure.post(
          `/limitUpdate?email=${user?.email}`,
          { limit }
        );
      }
    }
  };

  return (
    <div >
      <div className="md:text-3xl font-extrabold gap-4 md:flex justify-evenly items-center text-xl">
        <h1>USD : ${taka}</h1>
        <h1>limit Number : {limit}</h1>
      </div>
      <form className="mt-12 w-full p-4" onSubmit={handelChackOut}>
        <div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              name="name"
              placeholder="name"
              required
              className="input input-bordered w-[100%] "
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Number</span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="number"
              required
              className="input input-bordered w-[100%] "
            />
          </div>
        </div>
        <CardElement
        className="border-2 px-4 rounded-md mt-2"
          options={{
            style: {

              base: {
                fontSize: "16px",
                color: "",
        

                lineHeight: "50px",
                "::placeholder": {
                  color: "",
                },
              },
              invalid: {
                color: "#9e2146",
                border:"2px solid red"
              },
            },
          }}
        />

        <button
          disabled={!strip || !secretKey}
          className="btn btn-primary mt-4"
          type="submit"
        >
          Pay
        </button>
        <h1 className="text-xl mt-4 text-red-500">{errorText}</h1>
      </form>
    </div>
  );
};

export default ChackOutFrom;
