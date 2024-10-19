// 1) Import json-server
const jsonServer = require('json-server');

// 2) Create json-server instance
const employeeServer = jsonServer.create();

// 3) Create path for the json file (data) - router()
const router = jsonServer.router("db.json");

// 4) Create middleware to parse json
const middleware = jsonServer.defaults();

// 5) Allow server to use router and middleware
employeeServer.use(middleware);
employeeServer.use(router);

// 6) Setup port for the server to run
const PORT = process.env.PORT || 8000;

// 7) Listen to the request
employeeServer.listen(PORT, () => {
  console.log(`Server running successfully at port number ${PORT}`);
});
