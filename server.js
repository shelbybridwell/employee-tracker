//dependecies
const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

//mysql connection
const connnection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',

    password: ''
    database: 'employeeDB'
});