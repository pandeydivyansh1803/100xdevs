// step 1: run command on terminal
// npm install express



// importing express package
const express = require('express')

// express() this function creates an express application
const app = express();


const bodyParser = require('body-parser')
app.use(bodyParser.json());
//app.use(express.json());

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


// we can also send js object on res
app.get('/request-handler',(req,res)=>{
    res.json({
        name : "DP1803",
        age : "OG"
    });
})

// we can also send html back on res
app.get('/route-handler',(req,res)=>{
    res.send('<h1>Hello world</h1>');
})

app.post('/post-handler',(req,res)=>{
    console.log(req.headers);
    // query parameters
    console.log(req.query.message);
    // this gives undefined with the req.body
    // to handle this at the top write
    // app.use(express.json())
    // we can also use body-parser for the same
    // npm install body-parser
    // const bodyParser = require('body-parser')
    // app.use(bodyParser.json())
    console.log(req.body)

    res.send('<h3>hello world</h3>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



