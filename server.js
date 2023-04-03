const cTable = require('console.table');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const logo = require("asciiart-logo");

console.log(
    logo({
        name: 'WELCOME TO THE EMPLOYEE TRACKER',
        font: 'ANSI Shadow',
        lineChars: 1,
        padding: 2,
        margin: 2,
        borderColor: 'cyan',
        logoColor: 'yellow',
        textColor: 'magenta',
    })
        .emptyLine()
        .render()
);

// Connect to database

const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'password',
        database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_tracker_db database.`)
);

// Start the application
const init = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Please select from the following options:",
                name: "initialize",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update an employee role",
                    "I'm finished"
                ]
            }
        ]).then(ans => {
            // CASES DEPENDING WHAT THE USER SELECTS;
            switch (ans.initialize) {
                case "View all departments": viewDept();
                    break;
                case "View all roles": viewRoles();
                    break;
                case "View all employees": viewEmployees();
                    break;
                case "Add a department": addDept();
                    break;
                case "Add a role": addRole();
                    break;
                case "Add an employee": addEmployee();
                    break;
                case "Update an employee role": updateEmployee();
                    break;
                case "I'm finished":
                    console.log("Thank you very much!");
                    process.exit();
            }
        }).catch(err => console.error(err));
}

init();