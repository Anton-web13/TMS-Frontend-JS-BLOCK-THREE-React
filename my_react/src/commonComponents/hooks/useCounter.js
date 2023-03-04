import {useCallback, useEffect, useState} from "react";

const useCounter = (initialValue) => {
    const [countValue, setCountValue] = useState(initialValue);

    const handleIncrement = useCallback(() => {
        setCountValue((prevState) => {
            return prevState + 1;
        })
    }, [])

    const handleDecrease = useCallback(() => {
        setCountValue(countValue - 1)
    }, [])

    const handleReset = useCallback(() => {
        setCountValue(0)
    }, [])

    const handleAddAmount = useCallback((amount) => {
        setCountValue(state => state + amount)
    }, [])

    return {
        countValue,
        handleIncrement,
        handleDecrease,
        handleReset,
        handleAddAmount,
    }
}

export default useCounter;