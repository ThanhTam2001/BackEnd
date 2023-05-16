const express = require('express');
const {GroupCreate} = require('../../controllers/Group')
const GroupRouter =express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + "/public/image");
    },
    filename: (req, file, cb) => {
        //nên đặt tên file upload theo ngày tháng năm giờ phút giây để tên file không bị trùng lặp
        const fileNewName = Date.now() + "_" + file.originalname;
        cb(null, fileNewName);
    }
})


const upload = multer({ storage });

GroupRouter.post("/groupcreate",upload.single("image"), GroupCreate)



module.exports = GroupRouter;