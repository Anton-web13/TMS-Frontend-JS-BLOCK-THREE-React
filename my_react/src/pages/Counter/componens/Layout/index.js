import Header from '../../../../components/Header';
import CounterView from "../CounterView";
import UserCard from "../../../../components/UserCard";

const Layout = ({counterValue, handleIncrement, handleReset}) => {

    return (
        <div>

            <div style={{marginBottom: 25}}>
                <CounterView
                    handleReset={handleReset}
                    counterValue={counterValue}
                    handleIncrement={handleIncrement}
                    someObject={{a: 1, b: 'Hello'}}
                />
            </div>

            <UserCard name={"Alex"} age={25}/>
        </div>
    );
};

export default Layout;