import { useRef } from "react";
import withItem from './withItem'

const CustomerList = (props) => {

    const customerRef = useRef(null);

    const { items, addItem, heading } = props;

    return (
        <>
            <h2>{heading}</h2>
            <label>
                Enter customer name:
                <input type="text" ref={customerRef} />
            </label>
            <button onClick={() => { addItem(customerRef.current.value) }}>Add customer</button>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </>
    );

}

export default withItem(CustomerList);