import {Route, Routes} from "react-router-dom";
import {ROUTE_NAMES} from "./routerNames";
import CounterCountainer from "../pages/Counter/countainers/CounterCountainer";
import ConditionalRenderingContainer from "../pages/ConditionalRendering/containers/ConditionalRenderingContainer";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<h1>Home page</h1>}/>
            <Route path={ROUTE_NAMES.COUNTER} element={<CounterCountainer />}/>
            <Route path={ROUTE_NAMES.CONDITIONAL_RENDERING} element={<ConditionalRenderingContainer />}/>

            <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
    );
};

export default Router;