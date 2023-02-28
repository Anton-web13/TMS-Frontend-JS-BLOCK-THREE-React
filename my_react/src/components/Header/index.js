import {Link} from "react-router-dom";

import {startCase} from "lodash";

import {ROUTE_NAMES} from "../../routers/routerNames";

import styles from "./styles.module.css";

const Header = () => {
    return (
        <div className={styles.wrapper}>

            {Object.entries(ROUTE_NAMES).map(([routeName, path]) => (
                <Link key={path} to={path} className={styles.navLink}>{startCase(routeName)}</Link>
            ))}
        </div>
    );
};

export default Header;