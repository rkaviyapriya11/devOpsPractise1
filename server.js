const http = require('http')

const server = http.createServer((req,res) =>{
	res.write('hello from this is my first node project paractising for devops');
	res.end();
});
server.listen(3000,()=>{
	console.log('server is running on port 3000');
});
