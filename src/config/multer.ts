import multer from 'multer';
import path, { resolve } from "path";
import crypto from "crypto"
import aws from "aws-sdk";
import multerS3 from 'multer-s3';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "tmp") ,
    filename (request, file, callback){
      const fileHash = crypto.randomBytes(16).toString("hex");
      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName);
    }
    
  }),
  s3: multerS3({
      s3: new aws.S3(),
      bucket: 'uploadsarquivo',
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: 'public-read',
      key: (req, file, cb) =>{
          crypto.randomBytes(16, (err, hash) => {
              if(err) cb(err);

              const fileName = `${hash.toString('hex')}-${file.originalname}`;

              cb(null, fileName);
          });
      },
  }),
};
