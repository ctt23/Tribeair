import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import trekkingsRoute from "./routes/trekkings.js"
import destinationsRoute from "./routes/destinations.js"


const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log ("Connected to MongoDB.")
    }   catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=> {
    console.log("mongoDB disconnected!")

})

//Middlewares

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/trekkings", trekkingsRoute);
app.use("/api/destinations", destinationsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


// Start the server
app.listen(8800, () => {
    connect()
    console.log("Connected to the backend.");
});



// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });