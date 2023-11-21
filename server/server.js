const express=require('express')

const getRandomData=require('./data/getData')
const app=express();

require('dotenv').config();
const PORT=process.env.PORT || 3000;

app.get('/doctors/dentist',getRandomData)
app.get('/doctors/gynecologist',getRandomData)
app.get('/doctors/dietitian',getRandomData)


app.listen(PORT,()=>{
    console.log("successfull ok");
})

