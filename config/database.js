const mongoose=require("mongoose")

require("dotenv").config();
const connectWithDb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        dbName:"BlogsWebsite1"
    })
    .then(console.log("DataBase Connected succesfully"))
    .catch((error)=>{
        console.error("DB connection Error");
        console.log(error);
        process.exit(1);

    })
}

module.exports=connectWithDb