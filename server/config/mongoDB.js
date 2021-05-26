const mongoose = require('mongoose');
const DB = process.env.DB_LINK;
const mongoDBConnect = async() => {
    try{
        await mongoose.connect(DB, {
            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log(`Established connection to the database`)
    }
    catch(err){
        console.error(err);
    }
}

module.exports = mongoDBConnect;