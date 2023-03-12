import {useCallback, useState} from "react";
import {v4 as uuid} from "uuid"

import Layout from "../components/Layout";
import {isEven} from "utils";

const CountersManagerContainer = () => {
    const [counters ,setCounters] = useState([]);

    const handleCounterCreate = () => {
        const newCounter = {
            id: uuid(),
            countValue: 0,
        }

        // setCounters((state) => [...state, newCounter])
        setCounters((state) => {
            const updatedCounters = state.map((counter) => {
                // if (isEven(counter.countValue)) {
                //     return {
                //         ...counter,
                //         countValue: counter.countValue + 1
                //     };
                // }

                return {
                    ...counter,
                    countValue: isEven(counter.countValue)
                        ? counter.countValue + 1
                        : counter.countValue
                }
            });

            updatedCounters.push(newCounter);

            return updatedCounters;

            // return [...updatedCounters, newCounter];

        })
    }

    const handleCounterRemove = useCallback((id) => {
        setCounters((state) => {
            const countersCope = structuredClone(state);
            const counterIndexToRemove = countersCope.findIndex(
                ({id: counterId}) => counterId === id
            );

            countersCope.splice(counterIndexToRemove, 1);

            return countersCope.map((counter) => {
                return {
                    ...counter,
                    countValue: !isEven(counter.countValue)
                        ? counter.countValue - 1
                        : counter.countValue
                }
            });
        })
    }, [])

    const handleIncrement = useCallback((counterId) => {
        setCounters((state) => {
            const countersCope = structuredClone(state);

            const foundCounter = countersCope.find(
                ({id}) => id === counterId
            );

            foundCounter.countValue += 1;

            return countersCope;
        })
    }, [])

    const handleDecrement = useCallback((counterId) => {
        setCounters((state) => {
            const countersCope = structuredClone(state);

            const foundCounter = countersCope.find(
                ({id}) => id === counterId
            );

            foundCounter.countValue -= 1;

            // if (foundCounter.countValue > 0) {
            //     foundCounter.countValue -= 1;
            // }
            return countersCope;
        })
    }, []);

    const handleCounterReset = useCallback((counterId) => {
        setCounters((state) => {
            const countersCope = structuredClone(state);

            const foundCounter = countersCope.find(
                ({id}) => id === counterId
            );

            foundCounter.countValue = 0;

            return countersCope;
        })
    }, []);

    const handleRemoveAllCounters = () => {
        setCounters([])
    }

    const totalSum = counters.reduce((result, {countValue}) => {
        return countValue + result;
    }, 0)

    return <Layout
        counters={counters}
        handleCounterCreate={handleCounterCreate}
        handleCounterRemove={handleCounterRemove}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleCounterReset={handleCounterReset}
        handleReset={handleRemoveAllCounters}
        totalSum={totalSum}
    />;
};

export default CountersManagerContainer;