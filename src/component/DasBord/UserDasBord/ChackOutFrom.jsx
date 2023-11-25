import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useContext} from "react";







const ChackOutFrom = () => {

     
     const [errorText,setErrorPage]=useState('')
     const strip = useStripe();
     const elements = useElements();





//  useEffect(()=>{
  
//     price>=1 &&   axiosApi.post('/payment',{price})
//     .then(res=> setSecretKey(res.data.clientSecret) )
  
//  },[axiosApi,price])
 
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
    // const {paymentIntent,err}=await strip.confirmCardPayment(secretKey,{
    //     payment_method:{
    //         card:card,
    //         billing_details:{
    //             name:user?.displayName || "unNone name",
    //             email:user?.email || "unNone email"
    //         }
    //     }
    // })
    // if (err) {
    //    setErrorPage(err.message);
    // }else{
    //     if (paymentIntent.status==='succeeded' ) {
    //         toast(`payment succesfull Your Transzation ID :${paymentIntent.id}`)
    //         setErrorPage('')
    //         const paymentDetails = {
    //           email:user?.email,
    //           price:price,
    //           date:new Date(),
    //           trans_id :paymentIntent.id,
    //           manuId : data.map(item=>item.manuId),
    //           cartId : data.map(item=>item._id),
    //           chack:"pending"

    //         }
    //        const res=await axiosApi.post(`/userPaymentInfo`,paymentDetails)
    //        console.log(res);
    //     }
        
      
    // }


  };


  return (
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
      <button disabled={!strip } className="btn btn-primary mt-4" type="submit">
        Pay
      </button>
    <h1>{errorText}</h1>
    </form>
  );
};

export default ChackOutFrom;
