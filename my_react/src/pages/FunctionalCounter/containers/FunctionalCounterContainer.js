import {useState, useEffect, useCallback} from "react";

import CounterView from "commonComponents/CounterView";
import {useCounter} from "../../../commonComponents/hooks";

const FunctionalCounterContainer = () => {
    // const [countValue, setCountValue] = useState(0);
    const {
        countValue,
        handleIncrement,
        handleDecrease,
        handleReset} = useCounter(0);

    const {
        countValue: secondCountValue,
        handleIncrement: secondHandleIncrement,
        handleDecrease: secondHandleDecrease,
        handleReset: secondHandleReset} = useCounter(15);

    const [date, setDate] = useState(new Date().getSeconds());

    useEffect(() => {
        console.log("Increment was recreated")
    }, [handleIncrement])

    return(
        <div>

            <CounterView
                counterValue={countValue}
                handleIncrement={handleIncrement}
                handleDecrease={handleDecrease}
                handleReset={handleReset}
            />

            <CounterView
                counterValue={secondCountValue}
                handleIncrement={secondHandleIncrement}
                handleDecrease={secondHandleDecrease}
                handleReset={secondHandleReset}
            />
        </div>
    )
};

export default FunctionalCounterContainer;