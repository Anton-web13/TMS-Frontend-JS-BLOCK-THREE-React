import {useCallback, useEffect, useState} from "react";

const useCounter = (initialValue) => {
    const [countValue, setCountValue] = useState(initialValue);

    const handleIncrement = useCallback(() => {
        setCountValue((prevState) => {
            return prevState + 1;
        })
    }, [])

    // const handleIncrement = useCallback(() => {
    //     setCountValue(countValue + 1)
    // }, [countValue])

    // const handleIncrement = () => {
    //     setCountValue((prevState) => {
    //         return prevState + 1;
    //     })
    // }

    const handleDecrease = useCallback(() => {
        setCountValue(countValue - 1)
    }, [])

    const handleReset = useCallback(() => {
        setCountValue(0)
    }, [])

    const handleAddAmount = useCallback((amount) => {
        setCountValue(state => state + amount)
    }, [])

    // useEffect(() => {
    //     if (trackCountChanges) {
    //         console.log(`Value was changed. Current value is ${countValue}`)
    //     }
    // }, [countValue])

    return {
        countValue,
        handleIncrement,
        handleDecrease,
        handleReset,
        handleAddAmount,
    }
}

export default useCounter;