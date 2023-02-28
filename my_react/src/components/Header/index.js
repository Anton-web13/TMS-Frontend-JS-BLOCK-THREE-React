import {Link} from "react-router-dom";

import {ROUTE_NAMES} from "../../routers/routerNames";

import styles from "./styles.module.css";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Link to={ROUTE_NAMES.HOME}>Home page</Link>
            <Link to={ROUTE_NAMES.COUNTER}>Counter</Link>
        </div>
    );
};

export default Header;