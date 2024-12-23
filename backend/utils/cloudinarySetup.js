import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary with the credentials
cloudinary.config({
  cloud_name: 'filmygram',
  api_key:'771648798834881',
  api_secret: 'ILYaY_TRcP5vULw_pdKhXBrYjMs',
});

// Function to upload a file buffer to Cloudinary using a stream
const uploadToCloudinary = (fileBuffer, resourceType) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: resourceType },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    uploadStream.end(fileBuffer);
  });
};

export default uploadToCloudinary;