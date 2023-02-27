import {Route, Routes} from "react-router-dom";
import {ROUTE_NAMES} from "./routerNames";
import CounterCountainer from "../pages/Counter/countainers/CounterCountainer";

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTE_NAMES.HOME} element={<h1>Home page</h1>}/>
            <Route path={ROUTE_NAMES.COUNTER} element={<CounterCountainer />}/>
        </Routes>
    );
};

export default Router;