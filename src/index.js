import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";
const app=express();

dotenv.config({
    path: './.env'
});

connectDB();
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`server is running on ${process.env.PORT}`);
        
    })
})

.catch((error)=>{
    console.log("Failed to connect to DB", error);
    process.exit(1);
});








// const connectDB=async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERRR:",error);
//          throw error;
//          });

//          app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//          });
            
        
//     }catch(error){
//         console.log("Error connecting to MongoDB", error);
//         throw error;
//     }
// };

// connectDB();