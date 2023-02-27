import PropTypes from "prop-types";

import styles from './styles.module.css';

const CounterView = ({counterValue, handleIncrement, handleReset, x= "Hello World" }) => {
    return (
        <div className={styles.wrapper}>
            <h1>{x}</h1>
            <div className={styles.display}>{counterValue}</div>
            {/*<div className={styles.display}>Multi: {multiplied}</div>*/}

            <div className={styles.controlButtons}>
                <button className={styles.controlButton}>-</button>
                <button className={styles.controlButton} onClick={handleReset}>Reset</button>
                <button className={styles.controlButton} onClick={handleIncrement}>+</button>

                {/*<button onClick={handleClick}>Click</button>*/}
            </div>
        </div>
    );
}

// CounterView.defaultProps = {
//     x: 'Hello World!',
// }

CounterView.propTypes = {
    counterValue: PropTypes.number.isRequired,
    handleIncrement: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
}

export default CounterView;