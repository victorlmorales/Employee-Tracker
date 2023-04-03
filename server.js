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