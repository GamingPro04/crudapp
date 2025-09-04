import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import AdminRoutes from './routes/user.route.js'
import EventRoutes from './routes/event.route.js'


const app = express();

//db connection
const dbConnection = async () => {
  try{
  await mongoose.connect(process.env.MONGOURI)
    console.log("DB Connected!");
  }
  catch(error){
    console.log(error.message);
  }
 
}

dbConnection()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use('/api/users', AdminRoutes)
app.use('/api/events', EventRoutes)

//running on the port
const port = process.env.PORT || 3000 
app.listen(port, () => {
  console.log("running on http://localhost:8000/");
});


