import {useEffect, useState} from "react";

const useCounter = (initialValue, trackCountChanges = false) => {
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

    const handleAddAmount = (amount) => {
        setCountValue(countValue + amount)
    }

    useEffect(() => {
        if (trackCountChanges) {
            console.log(`Value was changed. Current value is ${countValue}`)
        }
    }, [countValue])

    return {
        countValue,
        handleIncrement,
        handleDecrease,
        handleReset,
        handleAddAmount,
    }
}

export default useCounter;