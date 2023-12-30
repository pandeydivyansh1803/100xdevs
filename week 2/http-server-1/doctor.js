// you need to create a in memory hospital
// get - user can check how many kidneys they have and their health
// put - user can replace all kidney, make it all healthy
// post- user can add new kidney of type given by user in req body
// delete - user can remove a kidney


// first step is to create a users array of objects
const users = [{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}]

const express = require('express')
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    let userKidneys=users[0].kidneys;
    let kidney_ct=userKidneys.length;
    let health_ct=0;
    userKidneys.forEach((ele,ind) => {
        if(ele.healthy===true){
            health_ct++;
        }
    });
    let unhealthy_ct=kidney_ct-health_ct;
    res.json({
        kidney_ct,
        health_ct,
        unhealthy_ct
    })
})

app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({healthy:isHealthy});
    res.sendStatus(200);
})

app.put("/",(req,res)=>{
    let n= users[0].kidneys.length
    for(let i=0;i<n;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.sendStatus(200);
})

app.delete("/",(req,res)=>{
    // you return status 411 if no unhealthy kidneys
    const array=[];
    let ct=0;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            array.push({healthy:true})
            ct++;
        }
    }
    if(ct==users[0].kidneys.length){
        res.status(411).send("no unhealtyhy kidneys")
    }
    else{
        users[0].kidneys=array;
        res.sendStatus(200);
    }
    
})

app.listen(3000,()=>{
    console.log('app listening on port 3000')
})
