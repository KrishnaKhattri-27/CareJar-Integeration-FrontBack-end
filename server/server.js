const express=require('express')
// const route=require('./routes/routes')
// const data=require('./data/getdData')
// const getDentist=require('./data/getData')
// const getGyneo=require('./data/getData')
// const getDietition=require('./data/getData')
const getRandomData=require('./data/getData')
const app=express();

require('dotenv').config();
const PORT=process.env.PORT || 3000;
// app.use(express.json())

// app.use('/doctors',route);

app.get('/doctors/dentist',getRandomData)
app.get('/doctors/gynecologist',getRandomData)
app.get('/doctors/dietitian',getRandomData)


app.listen(8000,()=>{
    console.log("successfull ok");
})

