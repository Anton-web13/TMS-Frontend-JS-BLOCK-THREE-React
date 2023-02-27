import styles from "./styles.module.css"


const UserCard = ({name, age, image}) => {

    return (
        <div className={`${styles.wrapper}`}>
            <img src={image} alt="party_photo" width={200} height={150} />
            <h1 className={styles.name}>User name: {name}</h1>
            <h2 className={styles.age}>Age: {age}</h2>
        </div>
    );
}

export default UserCard;