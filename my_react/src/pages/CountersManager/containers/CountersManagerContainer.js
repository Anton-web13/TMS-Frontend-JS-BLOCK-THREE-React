import {useState} from "react";
import {v4 as uuid} from "uuid"

import Layout from "../components/Layout";
import {isEven} from "../utils/isEven";

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
                if (isEven()) {

                }
            })
        })
    }

    const handleCounterRemove = (id) => {
        setCounters((state) => {
            const countersCope = structuredClone(state);
            const counterIndexToRemove = countersCope.findIndex(
                ({id: counterId}) => counterId === id
            );

            countersCope.splice(counterIndexToRemove, 1);

            return countersCope;
        })
    }

    const handleIncrement = (counterId) => {
        setCounters((state) => {
            const countersCope = structuredClone(state);

            const foundCounter = countersCope.find(
                ({id}) => id === counterId
            );

            foundCounter.countValue += 1;

            return countersCope;
        })
    }

    const handleDecrement = (counterId) => {
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
    }

    const handleCounterReset = (counterId) => {
        setCounters((state) => {
            const countersCope = structuredClone(state);

            const foundCounter = countersCope.find(
                ({id}) => id === counterId
            );

            foundCounter.countValue = 0;

            return countersCope;
        })
    }

    const handleRemoveAllCounters = () => {
        setCounters([])
    }

    return <Layout
        counters={counters}
        handleCounterCreate={handleCounterCreate}
        handleCounterRemove={handleCounterRemove}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleCounterReset={handleCounterReset}
        handleReset={handleRemoveAllCounters}
    />;
};

export default CountersManagerContainer;