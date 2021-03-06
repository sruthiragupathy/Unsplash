import {API} from "../backend";

export const createPicture = (photo)=>{
    console.log("photo",photo)
    return fetch(`${API}/add`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(photo)
        }
    )
    .then(response=>response.json())
    .catch(err=>console.log("err",err))
}

export const getPictures = () =>{
    return fetch(`${API}`,{
        method:"GET"
    }
    )
    .then(response=>response.json())
    .catch(err=>console.log("err",err))
}

export const deletePictures = (password,pictureId) => {
    console.log("password",password);
    console.log(`${API}/${pictureId}`);
    console.log(JSON.stringify({password}))
    
    return fetch(`${API}/${pictureId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify({password})
        }
    )
    .then(response=>response.json())
    
    .catch(err=>console.log("err",err))
}