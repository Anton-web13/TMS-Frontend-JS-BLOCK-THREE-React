import UserCard from "../UserCard";

import styles from "./styles.module.css"

const users = [
    {
        name: "Alex",
        age: 25,
    },
    {
        name: "Pol",
        age: 14,
    },
    {
        name: "Oleg",
        age: 96,
    },
    {
        name: "Oleg",
        age: 96,
    },
]

const App = () => (
    <div className={styles.wrapper}>
        {users.map(({name, age}) => (
            <UserCard key={name} name={name} age={age}/>
        ))}

        {/*<UserCard name="Alex" age={25}/>*/}
        {/*<UserCard name={"Alex"} age={25}/>*/}
        {/*<UserCard name={"Oleg"} age={14}/>*/}
        {/*<UserCard name={"Pol"} age={36}/>*/}
    </div>
);

export default App;
