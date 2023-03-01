import CounterView from "../CounterView";

const Layout = ({counterValue, handleIncrement, handleDecrease, handleReset, countValueDescription, isEven}) => {
    return (
        <div>
            <div style={{marginBottom: 25}}>
                <CounterView
                    handleReset={handleReset}
                    counterValue={counterValue}
                    handleIncrement={handleIncrement}
                    handleDecrease={handleDecrease}
                    countValueDescription={countValueDescription}
                    isEven={isEven}
                />
            </div>
        </div>
    );
};

export default Layout;