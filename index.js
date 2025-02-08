
const fs=require('fs');
const http=require('http');

const PORT=3005;


const server=http.createServer((req,res)=>{
const home= fs.readFileSync('index.html','utf-8');
const about= fs.readFileSync('contact.html','utf-8');
const contact= fs.readFileSync('about.html','utf-8');
 if(req.url==='/') return res.end(home)
 if(req.url==='/about') return res.end(about)
 if(req.url==='/contact') return  res.end(contact)

 else return  res.end("<h1>404 Page Not Found</h1>");
});

server.listen(PORT,"localhost",()=>{
    console.log(`server is running on port ${PORT}`);
});



