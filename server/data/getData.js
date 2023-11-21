const { faker } = require('@faker-js/faker');


const generateData=()=>{
    const temp={
        name :faker.internet.userName(), 
        experience : faker.number.int({ min: 0, max: 15 }),
        fees:faker.finance.amount({ min: 200, max: 2000 }) ,
        patient:faker.number.int({ min: 0, max: 1000 }),
        feedback:faker.number.int({ min: 0, max: 100 }),
        image:"https://100k-faces.glitch.me/random-image" ,
        address:faker.location.city()+","+faker.location.state()+faker.location.streetAddress()
        }
        return  temp;
}



const getRandomData=(req,res)=>{
    const dataArray = [];
    for (let i = 0; i < 10; i++) {
        dataArray.push(generateData());
    }
    res.json(dataArray);
}

module.exports=getRandomData;
