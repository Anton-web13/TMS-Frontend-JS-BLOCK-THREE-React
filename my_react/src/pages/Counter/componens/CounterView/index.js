import PropTypes from "prop-types";

import styles from './styles.module.css';

const CounterView = ({counterValue, handleIncrement, handleDecrease, handleReset, countValueDescription, isEven}) => {
    return (
        <div className={`${styles.wrapper} ${isEven ? styles.redColor : styles.turquoiseColor}`}>
            <div className={styles.display}>{counterValue}</div>
            <div className={styles.display}>{countValueDescription}</div>

            <div className={styles.controlButtons}>
                <button className={styles.controlButton} onClick={handleDecrease}>-</button>
                <button className={styles.controlButton} onClick={handleReset}>Reset</button>
                <button className={`${styles.controlButton}`} onClick={handleIncrement}>+</button>

            </div>
        </div>
    );
}

CounterView.propTypes = {
    counterValue: PropTypes.number.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    isEven: PropTypes.bool.isRequired,
    countValueDescription: PropTypes.string.isRequired,
}

export default CounterView;