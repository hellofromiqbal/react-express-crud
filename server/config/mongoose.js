import mongoose from 'mongoose';

const PORT = 5173;

const connectMongoDB = (app) => {
  mongoose.connect('mongodb://localhost:27017/react-express-crud?authSource=admin')
    .then(() => {
      console.log('App connected to MongoDB...');
      app.listen(PORT, () => {
        console.log(`App is listening in port http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export default connectMongoDB;