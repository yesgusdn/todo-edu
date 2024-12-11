import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <div> Counter </div>
            <div> {count} </div>
            <Button variant="primary" onClick={incrementCount}>
                Up 1
            </Button>
        </div>
    );
};

export default Counter;
