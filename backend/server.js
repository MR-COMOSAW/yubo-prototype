const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{res.send('Backend is working');});

app.listen(3001,()=>console.log('Backend running on port 3001'));