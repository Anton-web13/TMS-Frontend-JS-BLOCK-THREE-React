// import './styles.module.css';

import styles from "./styles.module.css"

const greetings = "Hello!"

const UserCard = (props) => {

    console.log(props)

    return (
        <div className={styles.wrapper}>
            {/*<h2 className={styles.age}>Age {greetings}</h2>*/}

            <h1 className={styles.name}>User name: {props.name}</h1>
            <h2 className={styles.age}>Age: {props.age}</h2>

            {/*{greetings}*/}

            {/*<p>{greetings}</p>*/}
        </div>
    );
}

export default UserCard;