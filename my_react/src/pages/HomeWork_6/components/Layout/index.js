import React from 'react';
import CounterCountainer from "../../../Counter/countainers/CounterCountainer";
import CounterView from "../../../../commonComponents/CounterView";
import UserCard from "../../../../commonComponents/UserCard";
import {logDOM} from "@testing-library/react";

import {useCounter} from "../../../../commonComponents/hooks";

const Layout = ({
                    countValue,
                    counter,
                    handleAddCounter,
                    addWord,
                    // handleReset,
                    // handleDecrease,
                    // handleIncrement,
                    handleResetCounter
}) => {
    // console.log(handleIncrement)
    // const countValue = 0;
    return (
        <div>
            <button onClick={handleAddCounter}>Add new Counter</button>
            <button style={{marginLeft: 25}}>Remove Counter</button>
            <button onClick={handleResetCounter} style={{marginLeft: 25}}>Reset Counter</button>

            <div>
                {counter.map(({id, handleIncrement, handleDecrease, handleReset}) => (
                    <CounterView addWord={addWord}
                                 handleReset={handleReset}
                                 handleDecrease={handleDecrease}
                                 handleIncrement={handleIncrement}
                                 countValue={countValue}
                                 id={id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Layout;
