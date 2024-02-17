import express from 'express';
import cors from 'cors';
import connectMongoDB from './config/mongoose.js';
import productsRoutes from './routes/productsRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/products", productsRoutes);

connectMongoDB(app);

app.get('/', (req, res) => {
  return res.send('App is listening...');
});
