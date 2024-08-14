const app = require('./app');
const connectDatabase = require('./config/database');
const cloudinary = require('cloudinary');
const PORT = process.env.PORT || 4000;

connectDatabase();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(PORT, () => {
    console.log(`Server running`)
});


console.log("Starting server.js...");


process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err); // Log the full error object, not just the message
  process.exit(1); // Optionally comment out this line for further investigation
});

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err}`);
    server.close(() => {
        process.exit(1);
    });
});