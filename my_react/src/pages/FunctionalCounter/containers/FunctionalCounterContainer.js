import {useState, useEffect, useCallback} from "react";

import CounterView from "commonComponents/CounterView";

const FunctionalCounterContainer = () => {
    const [countValue, setCountValue] = useState(0);
    const [date, setDate] = useState(new Date().getSeconds());

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         setDate(new Date().getSeconds())
    //     }, 1000)
    //
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])


    // const handleIncrement = useCallback(() => {
    //     setCountValue(countValue + 1)
    // }, [countValue])

    const handleIncrement = useCallback(() => {
        setCountValue((prevState) => {
            return prevState + 1;
        })
    }, [])

    // const handleIncrement = () => {
    //     setCountValue((prevState) => {
    //         return prevState + 1;
    //     })
    // }

    const handleDecrease = useCallback(() => {
        setCountValue((state) => state - 1)
    }, [])

    const handleReset = useCallback(() => {
        setCountValue(0)
    }, [])

    console.log(date)

    return(
        <div>

            <CounterView
                counterValue={countValue}
                handleIncrement={handleIncrement}
                handleDecrease={handleDecrease}
                handleReset={handleReset}
            />
        </div>
    )
};

export default FunctionalCounterContainer;