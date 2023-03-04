import {Component, memo} from "react";
// import {PureComponent, memo} from "react";

import styles from "./styles.module.css"
import * as PropTypes from "prop-types";

const UserCard = ({id, name, age, image, onDelete}) => {
    console.log("User Card Rendered")
    return (
        <div className={`${styles.wrapper}`}>
            <h3 className={styles.id} style={{fontSize: 18}}>ID: {id}</h3>
            <img src={image} alt="party_photo" width={200} height={150}/>
            <h1 className={styles.name}>User name: {name}</h1>
            <h2 className={styles.age}>Age: {age}</h2>

            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

UserCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
    children: PropTypes.any,
    onDelete: PropTypes.func,
}

export default memo(UserCard);