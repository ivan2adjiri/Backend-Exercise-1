

const http = require ('http');

const handleAllRequests = (requestObject, responseObject) => {
    console.log ('Hi, I just received a request');
    const url = requestObject.url;
    responseObject.setHeader("content-type", "text/html");
    if(url === '/'){
        responseObject.write("<h1>Welcome to the home page<h1/>");
    }else if(url === '/login'){
        responseObject.write("<h2>Welcome to the login page<h2/>");
    }else if(url === '/signup'){
        responseObject.write("<h2>Welcome to the signup page<h2/>");
    }else if(url === '/profile'){
        responseObject.write("<h2>Welcome to the profile page<h2/>");
    }else{
        responseObject.write("<h1>Page not found<h1/>");
    }
    responseObject.end()
 }

const server = http.createServer(handleAllRequests);
server.listen(3000, '127.0.0.1', ()=> console.log('Server is ready to accept request'));


 