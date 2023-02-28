import styles from "./styles.module.css";

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <button>Home page</button>
            <button>Counter</button>
        </div>
    );
};

export default Header;