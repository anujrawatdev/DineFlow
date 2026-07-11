const multer = require('multer');

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null,"./public/uploads");
    },
    //if name of every image will be same so it will overwrite that's why we use
    filename(req,file,cb){
      cb(null,Date.now() + "-" + file.originalname);
    }
 })

 const upload = multer({
    storage,
 });

module.exports = upload;