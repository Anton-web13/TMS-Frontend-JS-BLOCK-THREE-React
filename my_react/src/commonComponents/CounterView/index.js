import {memo} from "react";

import PropTypes from "prop-types";

import styles from './styles.module.css';

const CounterView = ({
    id,
    counterValue,
    handleIncrement,
    handleDecrease,
    handleReset,
    countValueDescription,
    isEven,
    handleRemove,
}) => {


    return (
        <div className={styles.wrapper} style={{backgroundColor: isEven ? "red" : "#0fb3d9"}}>
            <div className={styles.display}>{counterValue}</div>
            <div className={styles.display}>{countValueDescription}</div>

            <div className={styles.controlButtons}>
                <button
                    disabled={counterValue === 0}
                    className={styles.controlButton}
                    onClick={() => handleDecrease(id)}
                >-</button>
                <button
                    className={styles.controlButton}
                    onClick={() => handleReset(id)}
                >Reset</button>
                <button
                    className={`${styles.controlButton}`}
                    onClick={() => handleIncrement(id)}
                >+</button>

            </div>

            {handleRemove && (
                <button style={{backgroundColor: "red"}} onClick={() => handleRemove(id)}>Remove!</button>
            )}

        </div>
    );
}

CounterView.propTypes = {
    id: PropTypes.string.isRequired,
    counterValue: PropTypes.number.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    // isEven: PropTypes.bool,
    // countValueDescription: PropTypes.string,
    handleRemove: PropTypes.func
}

export default memo(CounterView);