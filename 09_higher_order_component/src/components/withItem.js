import { useState } from "react";

const withItem = (WrappedComponent) => {
    const WithItemComp = (props) => {

        let [items, setItems] = useState([]);

        const addItem = (itemName) => {
            setItems((items) => [...items, itemName]);
        };

        return (
            <WrappedComponent items={items} addItem={addItem} {...props} />
        );
    };

    return WithItemComp;
};

export default withItem;