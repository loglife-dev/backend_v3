import multer from 'multer';
import path from "path";
import crypto from "crypto"
import aws from "aws-sdk";
import multerS3 from 'multer-s3';

const storageTypes = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "tmp", "img") ,
    filename (request, file: Express.Multer.File, callback){
      const fileHash = crypto.randomBytes(16).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName);
    }
    
  })
 
};

module.exports = {
  dest: path.resolve(__dirname, "..", "tmp", "img"),
  storage: storageTypes[process.env.STORAGE_TYPE],
  fileFilter: (req, file: Express.Multer.File, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/jpg",
      "image/png"
    ]

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type."))
    }
  }
}