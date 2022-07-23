import { useRef, useState } from "react";

const EmployeeListNormal = (props) => {

    const employeeRef = useRef(null);

    let [employees, setEmployees] = useState([]);

    let i = 0;

    const handleClick = e => {
        setEmployees((employees) => [...employees, employeeRef.current.value]);
    }

    return (
        <>
            <h2>{props.heading}</h2>
            <label>
                Enter employee name:
                <input type="text" ref={employeeRef} />
            </label>
            <button onClick={handleClick}>Add employee</button>
            <ul>
                {employees.map(employee => <li key={i++}>{employee}</li>)}
            </ul>
        </>
    );

}

export default EmployeeListNormal;