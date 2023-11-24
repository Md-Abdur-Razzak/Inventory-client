import axios from "axios";

export const userimage = async (image) => {
    
    const formData = new FormData()
    formData.append('image',image)
   const {data}= await axios.post(`https://api.imgbb.com/1/upload?key=d8ecf780ff0542641e24b64030f1febd`,formData)
  

    return data.data
};