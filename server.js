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

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log(`employee manager`)
    // runs the app
    firstPrompt();
});
function firstPrompt() {

    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "Make your selection...",
            choices: [
                "View Employees",
                "View Employees by Department",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Add Role",
                "End"]
        })
        .then(function ({ task })) {
            switch (task) {
                case "View Employees":
                    viewEmployee();
                    break;
          
                  case "View Employees by Department":
                    viewEmployeeByDepartment();
                    break;
                
                  case "Add Employee":
                    addEmployee();
                    break;
          
                  case "Remove Employees":
                    removeEmployees();
                    break;
          
                  case "Update Employee Role":
                    updateEmployeeRole();
                    break;
          
                  case "Add Role":
                    addRole();
                    break;
          
                  case "End":
                    connection.end();
                    break;
            }
        });
}