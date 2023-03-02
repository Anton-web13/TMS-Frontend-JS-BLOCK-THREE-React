import {Link} from "react-router-dom";
import {startCase} from "lodash";
import {useLocation} from "react-router-dom";

import {ROUTE_NAMES} from "../../routers/routerNames";

import styles from "./styles.module.css";
import FunctionalCounterContainer from "../../pages/FunctionalCounter/containers/FunctionalCounterContainer";

const Header = () => {
    const {pathname} = useLocation();

    return (
        <div className={styles.wrapper}>

            {Object.entries(ROUTE_NAMES).map(([routeName, path]) => (
                <Link
                    key={path}
                    to={path}
                    className={styles.navLink}
                    style={{backgroundColor: path === pathname ? "brown" : "#322c93"}}
                >{startCase(routeName)}</Link>
            ))}
        </div>
    );
};

export default Header;