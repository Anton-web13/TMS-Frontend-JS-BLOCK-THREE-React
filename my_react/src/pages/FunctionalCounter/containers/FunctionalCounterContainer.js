import {useState} from "react";

import CounterView from "commonComponents/CounterView";

// const FunctionalCounterContainer = () => {
//     // const [countValue, setCountValue] = useState(0, {});
//     // const [countValue, setCountValue] = useState(0);
//     const [counterState, setCounterState] = useState({
//         countValue: 0,
//         x: "srgsergs",
//     });
//
//     console.log(counterState)
//
//     // const handleIncrement = () => {
//     //     setCountValue(countValue + 1)
//     // }
//
//     const handleIncrement = () => {
//         setCounterState({...counterState, countValue: counterState.countValue + 1})
//     }
//
//     const handleDecrease = () => {
//         setCounterState((state) => ({
//             ...state,
//             countValue: state.countValue - 1,
//         }))
//     }
//
//
//     return <CounterView
//         counterValue={counterState.countValue}
//         handleIncrement={handleIncrement}
//         handleDecrease={handleDecrease}
//     />
// };

const FunctionalCounterContainer = () => {
    const [countValue, setCountValue] = useState(0)

    const handleIncrement = () => {
        setCountValue(countValue + 1)
        // setCountValue((state) => state + 1)
    }

    const handleDecrease = () => {
        setCountValue(countValue - 1)
    }

    const handleReset = () => {
        setCountValue(0)
    }


    return <CounterView
        counterValue={countValue}
        handleIncrement={handleIncrement}
        handleDecrease={handleDecrease}
        handleReset={handleReset}
    />
};

export default FunctionalCounterContainer;