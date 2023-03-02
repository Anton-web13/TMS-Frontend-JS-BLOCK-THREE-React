import PropTypes from "prop-types";

import styles from './styles.module.css';

const CounterView = ({counterValue, handleIncrement, handleDecrease, handleReset, countValueDescription, isEven}) => {
    const isEven2 = counterValue % 2 === 0;

    return (
        <div className={styles.wrapper} style={{backgroundColor: isEven ? "red" : "#0fb3d9"}}>
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
    counterValue: PropTypes.number,
    handleIncrement: PropTypes.func,
    handleReset: PropTypes.func,
    isEven: PropTypes.bool,
    countValueDescription: PropTypes.string,
}

export default CounterView;