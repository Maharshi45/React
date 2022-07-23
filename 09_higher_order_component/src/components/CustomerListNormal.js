import { useRef, useState } from "react";

const CustomerListNormal = (props) => {

    const customerRef = useRef(null);

    let [customers, setCustomers] = useState([]);

    let i = 0;

    const handleClick = e => {
        setCustomers((customers) => [...customers, customerRef.current.value]);
    }

    return (
        <>
            <h2>{props.heading}</h2>
            <label>
                Enter customer name:
                <input type="text" ref={customerRef} />
            </label>
            <button onClick={handleClick}>Add customer</button>
            <ul>
                {customers.map(customer => <li key={i++}>{customer}</li>)}
            </ul>
        </>
    );

}

export default CustomerListNormal;