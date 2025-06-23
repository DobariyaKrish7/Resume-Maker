// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import  {connectDB}  from './config/db.js'



// const app = express()
// const PORT = 3000

// app.use(cors())

// //connect to the database
// connectDB();

// // Middleware to parse JSON requests
// app.use(express.json())


// app.get('/', (req, res) => {
//   res.send('Welcome to the backend server!')
// })

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`)
// })
// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello from the API!' })
// })


import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use('/api/auth', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});

