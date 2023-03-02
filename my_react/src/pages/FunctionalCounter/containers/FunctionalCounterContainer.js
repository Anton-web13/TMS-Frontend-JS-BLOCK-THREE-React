import {useState, useEffect} from "react";

import CounterView from "commonComponents/CounterView";
import {useCounter} from "commonComponents/hooks";

const FunctionalCounterContainer = () => {
    const {countValue, handleIncrement, handleDecrease, handleReset} = useCounter(0)
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