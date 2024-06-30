import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    const port = process.env.PORT || 8080
    app.listen(port, () => {
        console.log(`Server running at port: ${port}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection failed", err);
})
