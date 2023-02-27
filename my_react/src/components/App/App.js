import UserCard from "../UserCard";
// import CounterView from "../../counter/componens/CounterView/index";

import party from "../../static/images/party.jpg";
import party2 from "../../static/images/party2.jpg";
import party3 from "../../static/images/party3.jpg";
import party4 from "../../static/images/party4.jpg";

import CounterCountainer from "../../counter/countainers/CounterCountainer";

import styles from "./styles.module.css";

// const element = <div>Hello</div>; // это элемент

const App = () => (
    <div className={styles.wrapper}>
        {/*<UserCard name="Alex" age={25} image={party}/>*/}
        {/*<UserCard name={"Alex"} age={25} image={party2}/>*/}
        {/*<UserCard name={"Oleg"} age={14} image={party3}/>*/}
        {/*<UserCard name={"Pol"} age={36} image={party4}/>*/}
        {/*<UserCard name={"Pol"} age={36} image={party4}/>*/}
        {/*<UserCard name={"Pol"} age={36} image={party4}/>*/}
        {/*<UserCard name={"Pol"} age={36} image={party4}/>*/}
        {/*<UserCard name={"Pol"} age={36} image={party4}/>*/}

        <CounterCountainer />



        {/*{element}*/}
    </div>
);

export default App;
