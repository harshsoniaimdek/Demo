import React from 'react'

export default function List() {
    const employees = ["ramesh","suresh","Kartik"]
  return (
    <ul>
        {
            employees.map((employee) => <li>{employee}</li>
            )
        }
    </ul>
  )
}
