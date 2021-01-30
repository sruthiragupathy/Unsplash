require('dotenv').config()

const Gallery = require("../Models/Gallery")

exports.getPictureById = (req,res,next,id) =>{
    Gallery.findById(id).exec((err,pic)=>{
        
        if(pic===null||err){
            return res.status(400).json({
                error:"Picture not found"
            })
        }
        req.pic = pic;
        // console.log(req.pic);
        next();
    })
   
}

exports.getPictures = (req,res)=>{
    Gallery.find((err,pictures)=>{ 
        if(err||!pictures){
            return res.status(400).json(err);
        }
        res.json(pictures)
    })
}

exports.addPictures = (req,res) =>{
    const data = new Gallery(req.body);
    data.save().then((data)=>res.json(data))
    .catch(err=>res.json(err))
}


exports.isAuthenticated = (req,res,next)=>{
    const {password} = req.body;
    
    if(password !== process.env.PASSWORD){
        return res.status(404).json({
            error:"Password does not match"
        })
    }
    next();
}
exports.deletePictures = (req,res)=>{
   
    const picture = req.pic;
    picture.remove((error,pic)=>{
        if(error){
            return res.status(400).json({
                error:"Failed to delete"
            })
        }
        res.json({
            message:"Succesfully deleted"
        })
    })
}