// import {Fragment} from "react";

import FunctionalCounterContainer from "../../FunctionalCounter/containers/FunctionalCounterContainer";
import CounterCountainer from "../../Counter/countainers/CounterCountainer";
import {Fragment} from "react";

const HomePageContainers = () => {
    return (
        <>
            <h1>Home</h1>

            <Fragment key={}>
                <p>1</p>
                <p>2</p>
            </Fragment>

            <>
                <FunctionalCounterContainer/>
                <CounterCountainer/>
            </>
        </>
    );
};

export default HomePageContainers;