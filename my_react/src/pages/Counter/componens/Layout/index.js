import Header from '../../../../components/Header';
import CounterView from "../CounterView";
import UserCard from "../../../../components/UserCard";

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

            {/*<UserCard name={"Alex"} age={25}/>*/}
        </div>
    );
};

export default Layout;