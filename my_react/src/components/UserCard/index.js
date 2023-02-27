// import './styles.module.css';

import styles from "./styles.module.css"

const greetings = "Hello!"

const UserCard = ({name, age, image}) => {

    // console.log(name, age, image);

    return (
        <div className={`${styles.wrapper} ${styles.background}`}>
            {/*<h2 className={styles.age}>Age {greetings}</h2>*/}

            <img src={image} alt="party_photo" width={200} height={150} />
            <h1 className={styles.name}>User name: {name}</h1>
            <h2 className={styles.age}>Age: {age}</h2>

            {/*{greetings}*/}

            {/*<p>{greetings}</p>*/}
        </div>
    );
}

export default UserCard;