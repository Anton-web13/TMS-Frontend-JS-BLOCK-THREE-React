import {useState, useEffect} from "react";

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
    // const [isEven, setIsEven] = useState(false)

    const handleIncrement = () => {
        setCountValue((prevState) => {
            return prevState + 1;
        })
    }

    const handleDecrease = () => {
        setCountValue(countValue - 1)
    }

    const handleReset = () => {
        setCountValue(0)
    }

    // useEffect(() => {
    //     setIsEven(countValue % 2 === 0)
    // }, [countValue])

    // console.log(isEven)

    // useEffect(() => {
    //     console.log("Did Mount")
    // }, [])
    //
    // useEffect(() => {
    //     let timer = setInterval(() => {
    //         console.log(new Date().getSeconds())
    //     }, 1000)
    //
    //     return () => {
    //         clearInterval(timer);
    //     }
    // }, [])

    // useEffect(() => {
    //     return () => {
    //         console.log("Unmount")
    //     }
    // }, [countValue])


    useEffect(() => {
        console.log("useEffect")
        return () => {
            console.log("CleanUp")
        }
    }, [countValue])

    // const isEven2 = countValue % 2 === 0;

    return(
        <div>
            <div>
                {/*{console.log("Rednder")}*/}
            </div>
            <CounterView
                // countValue={countValue % 2 === 0}
                // countValue={isEven2}
                counterValue={countValue}
                handleIncrement={handleIncrement}
                handleDecrease={handleDecrease}
                handleReset={handleReset}
            />
        </div>
    )
};

export default FunctionalCounterContainer;