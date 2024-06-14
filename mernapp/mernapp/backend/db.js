// const mongoose = require('mongoose');
// const mongoURI =`mongodb+srv://ksem1997:ksem1997@cluster0.4t3krlt.mongodb.net/yourDatabaseName?retryWrites=true&w=majority`

// const mongoDB = async() => {
//    await mongoose.connect(mongoURI,{useUnifiedTopology: true},async(err,result)=>{  
//        if(err) console.log("---",err)
//        else{
//         console.log("connected");
    
//     }
            
           
            
//         });
//     }

//     module.exports = mongoDB();
const mongoose = require('mongoose');
const mongoURI = `mongodb+srv://ksem1997:ksem1997@cluster0.4t3krlt.mongodb.net/yourDatabaseName?retryWrites=true&w=majority`;

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useUnifiedTopology: true });
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
    }
};

module.exports = mongoDB;
