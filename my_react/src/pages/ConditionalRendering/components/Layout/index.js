import styles from "./styles.module.css"

const Layout = ({handleActiveToggle, isActive, isBlurEnabled, handleBlurActive, handleBlurUnActive}) => {
    console.log(isActive)
    return (
        <div>
            <div className={`${styles.box} ${isBlurEnabled ? styles.blueFilter : ""}`} style={{backgroundColor: isActive ? "red" : "#fff"}} />

            <button onClick={handleActiveToggle}>{isActive ? "Deactivate" : "Activate"}</button>

            <button onMouseOver={handleBlurActive} onMouseLeave={handleBlurUnActive}>{isBlurEnabled ? "Disable blur" : "Enable blur"}</button>

            {isActive && <div>Hello, I'm Hidden div</div>}

        </div>
    );
};

export default Layout;
