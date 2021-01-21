const express = require("express");
const router = express.Router();

const {getPictures,addPictures,deletePictures,getPictureById,isAuthenticated} = require("../Controllers/Gallery")

router.get("/",getPictures);

router.post("/add",addPictures);
router.param('pictureId',getPictureById);
router.delete("/:pictureId",isAuthenticated,deletePictures);

module.exports = router;