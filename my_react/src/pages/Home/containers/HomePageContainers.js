// import {Fragment} from "react";

import FunctionalCounterContainer from "../../FunctionalCounter/containers/FunctionalCounterContainer";
import CounterCountainer from "../../Counter/countainers/CounterCountainer";
import {Fragment} from "react";
import {useCounter} from "../../../commonComponents/hooks";

const HomePageContainers = () => {
    const {countValue, handleIncrement, handleDecrease, handleReset} = useCounter(0);
    const isDisabled = countValue === 0;

    return (
        <>
            <h1>Home</h1>

            <p>{countValue}</p>
            {/*<button disabled={isDisabled} onClick={isDisabled ? () => {} : handleDecrease}>-</button>*/}
            {/*<button disabled={isDisabled} onClick={isDisabled && handleDecrease}>-</button>*/}
            <button disabled={isDisabled} onClick={handleDecrease}>-</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrement}>+</button>

            <Fragment>
                <p>1</p>
                <p>2</p>
            </Fragment>

            <>
                {/*<FunctionalCounterContainer/>*/}
                {/*<CounterCountainer/>*/}
            </>
        </>
    );
};

export default HomePageContainers;