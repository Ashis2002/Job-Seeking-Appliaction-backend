import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
  });

  console.log(process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000);
  

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
  });