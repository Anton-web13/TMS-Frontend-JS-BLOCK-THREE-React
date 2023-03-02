import {useState} from "react";

const useCounter = (initialValue) => {
    const [countValue, setCountValue] = useState(initialValue);

    const handleIncrement = () => {
        setCountValue((prevState) => {
            return prevState + 1;
        })
    }

    const handleDecrease = () => {
        setCountValue(countValue - 1)
    }

    const handleReset = () => {
        setCountValue(0)
    }

    return {
        handleIncrement,
        handleDecrease,
        handleReset,
    }
}