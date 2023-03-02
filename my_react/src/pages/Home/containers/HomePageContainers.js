// import React from 'react';
import {useCounter} from "commonComponents/hooks";

const HomePageContainers = () => {
    const {countValue, handleAddAmount} =
        useCounter(0, true);

    return (
        <div>
            <h1>Home</h1>
            <p>{countValue}</p>
            <button onClick={() => handleAddAmount(5)}>+</button>
            <button onClick={() => handleAddAmount(10)}>+</button>
            <button onClick={() => handleAddAmount(15)}>+</button>
        </div>
    );
};

export default HomePageContainers;