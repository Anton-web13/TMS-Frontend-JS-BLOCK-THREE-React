import Header from '../../../../components/Header';
import CounterView from "../CounterView";

const Layout = ({counterValue, handleIncrement, handleReset}) => {
    return (
        <div>
            <Header />
                <CounterView
                    handleReset={handleReset}
                    counterValue={counterValue}
                    handleIncrement={handleIncrement}
                />
        </div>
    );
};

export default Layout;