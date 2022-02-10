// const http = require('http');
// require function is what you use to manage the dependicies of your programs // 
// Can use it to depend on any library. Built in or third party  //
// This program depends on the built in http module. It is the module that has the features of creating a web server. There are a lot of other libraries that can be used to cerate a web server, bu this one is built in. No intalls needs to use it, but you do need to require it. in REPL, this is already there. It is not the case in Executable scripts and this needs to be required. You can't use dependiencies without requiring them first //

// const server = http.createServer((req, res) => {
//   res.end('Hello World\n');
// });
// Creates a server constant by invoking the create server function on the http module //
// One of many functions of the many available under the http module API // 
// Used to create a web server // 
// Accepts and arg known as the request listener //
// This is a simple function that node will invoke everytime there is a request to the created web server //
// Remember this arg as a listener, this server will listen to requests and will invoke the listener function for each request //
// Res is the other argument of a listener function. It is a response object //
// It is the other side of a request connection //
// This object can be used to write things back to the requester /
// It is writing back using the .end method and the hello world string //
// The .end method can be used to write data and then end the connection //
// This only creates the server, it does not activate it //

// // CHANGING THE SERVER RESPONSE // 
// const server = http.createServer((req, res) => {
//   res.end('Hello Node...\n');
// });
// // Restart the node process to make this change work // 
// // Kill the process with Ctr+C. click up arrow to get the same command and execute it. Refresh the web browser //
// // CHANGING THE SERVER RESPONSE // 


// server.listen(4242, () => {
//   console.log('Server is running...');
// });
// Activates this server by invoking the .listen function on the created server //
// This function accepts many arguments, such as what OS port to use for this server //
// The last arg here is a func that will be invoked once this server is succesfully running on this port //
// this ex. logs a message to indicate that this server is running // 
// This listen func is what actually what keeps the node process running //
// It is the task that will keep the node run time busy and not exit //

// This Hello World script uses the CommonJs module management system // 
// Every script that uses this require keyword is classified as a CommonJS module //
// Node as supports the ECMAScript module management and can be used in two ways. 
// By naming the file with the .mjs extention or by setting the whole project to use ECMAScript modules //
// If you try to run this script with the .mjs file node will compnain about the require keyword bc it understood that this is an ECMA script module bc of it's extension //
// ECMAScript modules do not use the require keyword, but the import keyword //

// TO FIX THIS //
// const http = require('http');
import http from 'http';
// import, then the name of what you want to import. Then, from the location of the module you are import or just the name for built in modules like http. Basically, import something from module path or name //

const server = http.createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(4242, () => {
  console.log('Server is running...');
});

// ANOTHER SYNTAX TO FIX THIS // 
// NAMED IMPORTS //
import { createServer } from 'http';

const server = createServer((req, res) => {
  res.end('Hello World\n');
});
// Instead of importing the whole http object, we used a named import and only import what the  script uses //

server.listen(4242, () => {
  console.log('Server is running...');
});
// NAMED IMPORTS //
// TO FIX THIS //
