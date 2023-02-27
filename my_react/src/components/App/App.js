import UserCard from "../UserCard";

import party from "../../static/images/party.jpg";
import party2 from "../../static/images/party2.jpg";
import party3 from "../../static/images/party3.jpg";
import party4 from "../../static/images/party4.jpg";

import styles from "./styles.module.css";

// const users = [
//     {
//         name: "Alex",
//         age: 25,
//     },
//     {
//         name: "Pol",
//         age: 14,
//     },
//     {
//         name: "Oleg",
//         age: 96,
//     },
//     {
//         name: "Oleg",
//         age: 96,
//     },
// ]

const App = () => (
    <div className={styles.wrapper}>
        {/*{users.map(({name, age}) => (*/}
        {/*    <UserCard key={name} name={name} age={age}/>*/}
        {/*))}*/}

        <UserCard name="Alex" age={25} image={party}/>
        <UserCard name={"Alex"} age={25} image={party2}/>
        <UserCard name={"Oleg"} age={14} image={party3}/>
        <UserCard name={"Pol"} age={36} image={party4}/>
        <UserCard name={"Pol"} age={36} image={party4}/>
        <UserCard name={"Pol"} age={36} image={party4}/>
        <UserCard name={"Pol"} age={36} image={party4}/>
        <UserCard name={"Pol"} age={36} image={party4}/>
    </div>
);

export default App;
