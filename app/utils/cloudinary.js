const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// const uploads = (file, folder) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(
//       file,
//       (result) => {
//         resolve({
//           photoPath: result.secure_url,
//         });
//       },
//       {
//         resource_type: "auto",
//         folder: folder,
//       }
//     );
//   });
// };

module.exports = cloudinary;
