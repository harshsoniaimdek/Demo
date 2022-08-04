import React from 'react';

function Lists() {
    const employees = [{id:1, name:"rohit", salary:"12345", age:29},{id:2, name:"ronit", salary:"67845", age:39},{id:3, name:"sohit", salary:"12565", age:29},{id:4, name:"rohit", salary:"12785", age:49}]
    
    return (
        <ul>
            {
            // employees.map((employee) => <li>{employee.id}{employee.name}{employee.salary}{employee.age}</li>)
            employees.map((employee, index) => <div key={index}>
                <li>{employee.id}</li>
                <li>{employee.name}</li>
                <li>{employee.salary}</li>
                <li>{employee.age}</li><br />
            </div>)
        }
        </ul>
    );
}

export default Lists;