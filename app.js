const express = require('express');
const dotenv = require('dotenv')

const env = process.argv[2] || "development";
dotenv.config({ path: `.env.${env}`});

const app = express();

const PORT = process.env.PORT;
const APP = process.env.APP;

function log(message){
const time = new Date().toISOString();
	console.log(`[${time}] [${env.toUpperCase()}] ${message}`);
}

app.get('/',(req,res)=>{
       res.send('hello world frp, ex[ress from ' + APP);
});

app.get('/health' ,(req,res)=>{
	console.log("Health check called");
	res.status(200).json({
		status:"UP"
});
});

app.listen(PORT, (req,res)=>{
log('Server is running on PORT ' + PORT);
})

