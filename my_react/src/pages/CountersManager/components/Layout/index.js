import PropTypes from "prop-types";

import CounterView from "../../../../commonComponents/CounterView";

import styles from "./styles.module.css"

const Layout = ({
                    counters,
                    handleCounterCreate,
                    handleReset,
                    handleCounterRemove,
                    handleIncrement,
                    handleDecrement,
                    handleCounterReset,
}) => {
    return (
        <div>
            <h1>Counters Manager</h1>


                <div>
                    <button onClick={handleCounterCreate}>Create Counter</button>
                    <button onClick={handleReset}>Reset</button>
                </div>

            <div className={styles.countersArea}>
                {counters.map(({id, countValue}) => (
                    <CounterView
                        id={id}
                        key={id}
                        handleReset={handleCounterReset}
                        handleIncrement={handleIncrement}
                        counterValue={countValue}
                        handleDecrease={handleDecrement}
                        handleRemove={handleCounterRemove}
                    />
                ))}
            </div>

        </div>
    );
};

Layout.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string,
        countValue:PropTypes.number,
    })).isRequired,
    handleCounterCreate: PropTypes.func,
    handleReset: PropTypes.func,
}

export default Layout;