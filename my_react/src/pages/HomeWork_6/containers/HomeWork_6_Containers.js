import CounterCountainer from "../../Counter/countainers/CounterCountainer";
import Layout from "../components/Layout";
import {v4 as uuid} from "uuid"
import CounterView from "../../../commonComponents/CounterView";

import {useCallback, useState} from "react";

import {useCounter} from "commonComponents/hooks";

const HomeWork6Containers = () => {
    // const [counterValue, setCounterValue] = useState(10);
    const [counter, setCounter] = useState([]);

    const {countValue, handleIncrement, handleDecrease, handleReset} = useCounter(0);

    const handleAddCounter = useCallback(() => {
        const newUser = {
            id: uuid(),
            countValue: countValue,
            handleIncrement: handleIncrement,
            handleDecrease: handleDecrease,
            handleReset: handleReset,
        };

        setCounter((state) => {
            console.log(state)
            return [...state, newUser]
        });
    }, [])

    const handleResetCounter = useCallback(() => {
        setCounter((state) => {
            handleReset();
            return [];
        });
    }, [])

    console.log(countValue)

    return (
        <div style={{padding: 25}}>
            <Layout
                countValue={countValue}
                // handleIncrement={handleIncrement}
                // handleDecrease={handleDecrease}
                // handleReset={handleReset}
                counter={counter}
                handleAddCounter={handleAddCounter}
                handleResetCounter={handleResetCounter}
            />
        </div>
    );
};

export default HomeWork6Containers;