import {Route, Routes} from "react-router-dom";

import CounterCountainer from "../pages/Counter/countainers/CounterCountainer";
import ConditionalRenderingContainer from "../pages/ConditionalRendering/containers/ConditionalRenderingContainer";
import FunctionalCounterContainer from "../pages/FunctionalCounter/containers/FunctionalCounterContainer";

import {ROUTE_NAMES} from "./routerNames";
import HomePageContainers from "../pages/Home/containers/HomePageContainers";
import ListsContainer from "../pages/Lists/containers/ListsContainer";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<HomePageContainers />}/>
            <Route path={ROUTE_NAMES.COUNTER} element={<CounterCountainer />}/>
            <Route path={ROUTE_NAMES.CONDITIONAL_RENDERING} element={<ConditionalRenderingContainer />}/>
            <Route path={ROUTE_NAMES.FUNCTIONAL_COUNTER} element={<FunctionalCounterContainer />}/>
            <Route path={ROUTE_NAMES.LISTS} element={<ListsContainer />}/>

            <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
    );
};

export default Router;