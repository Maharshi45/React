import { useRef } from "react";
import withItem from './withItem'

const EmployeeList = (props) => {

    const employeeRef = useRef(null);

    const { items, addItem, heading } = props;

    return (
        <>
            <h2>{heading}</h2>
            <label>
                Enter employee name:
                <input type="text" ref={employeeRef} />
            </label>
            <button onClick={() => { addItem(employeeRef.current.value) }}>Add employee</button>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    );

}

export default withItem(EmployeeList);