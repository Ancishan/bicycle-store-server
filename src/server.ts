import mongoose from 'mongoose'
import app from "./app";
import dotenv from './config';
import config from './config';



async function server() {
    try {
       await mongoose.connect('mongodb+srv://bicycle-store:HzxBNszLSGoWpc5c@cluster0.nhcslav.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        app.listen(5000, () => {
            console.log("server running")
        })

    } catch (error) {
        console.log(error)
    }
   
}

console.log(config.database_url)

server();