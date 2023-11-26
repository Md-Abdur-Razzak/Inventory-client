import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useContext} from "react";
import AdminSecoure from "../../../Hook/AdminSecoure";
import { toast } from "react-toastify";
import { MyContext } from "../../../Route/AuthProvider";








const ChackOutFrom = ({data}) => {
  const {user}=useContext(MyContext)
     const {taka,limit}=data || {}
     const axiosSecure = AdminSecoure()
     const [errorText,setErrorPage]=useState('')
     const [secretKey,setSecretKey]=useState('')
     const strip = useStripe();
     const elements = useElements();





 useEffect(()=>{
   axiosSecure.post('/payment',{taka})
    .then(res=> setSecretKey(res.data.clientSecret) )
  
 },[axiosSecure,taka])
 
  const handelChackOut = async (e) => {
    e.preventDefault();
    if (!strip || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card==null) {
        return
    }
    const {error,paymentMethod}=await strip.createPaymentMethod({
        type:"card",
        card
    })
    if(error){
        setErrorPage(error.message)
    }
    else{
        // console.log("succesfull payment : ",paymentMethod);
        setErrorPage('')
    }
    const {paymentIntent,err}=await strip.confirmCardPayment(secretKey,{
        payment_method:{
            card:card,
            billing_details:{
                name:user?.displayName || "unNone name",
                email:user?.email || "unNone email"
            }
        }
    })
    if (err) {
       setErrorPage(err.message);
    }else{
        if (paymentIntent.status==='succeeded' ) {
           const taka = (paymentIntent.amount );
           const amount = {taka}
           await axiosSecure.post('/amount',amount)
          
            toast.success(`payment succesfull Your Transzation ID :${paymentIntent.id}`)
            setErrorPage('')
      
          const{data}= await axiosSecure.post(`/limitUpdate?email=${user?.email}`,{limit})
          console.log(data);
        }
        
      
    }


  };


  return (
  <div>
    <div className="text-3xl font-extrabold gap-4 flex justify-evenly items-center">
        <h1>USD : ${taka}</h1>
        <h1>limit Number : {limit}</h1>
    </div>
        <form className="mt-12" onSubmit={handelChackOut}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "",
           
              lineHeight:"50px",
              "::placeholder": {
                color: "",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button disabled={!strip || !secretKey } className="btn btn-primary mt-4" type="submit">
        Pay
      </button>
    <h1>{errorText}</h1>
    </form>
  </div>
  );
};

export default ChackOutFrom;
