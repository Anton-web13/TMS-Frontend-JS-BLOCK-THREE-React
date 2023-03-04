import {Component, memo} from "react";
// import {PureComponent, memo} from "react";

import styles from "./styles.module.css"
import * as PropTypes from "prop-types";

const UserCard = ({id, name, age, image, isBlocked, onDelete, onBlock}) => {
    console.log("User Card Rendered")
    return (
        <div className={`${styles.wrapper}`} style={{backgroundColor: isBlocked ? "red" : "white"}}>
            <h3 className={styles.id} style={{fontSize: 18}}>ID: {id}</h3>
            <img src={image} alt="party_photo" width={200} height={150}/>
            <h1 className={styles.name}>User name: {name}</h1>
            <h2 className={styles.age}>Age: {age}</h2>

            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={() => onBlock(id)}>Block User!</button>
        </div>
    );
}

UserCard.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    image: PropTypes.string,
    // children: PropTypes.any,
    isBlocked: PropTypes.bool.isRequired,
    onDelete: PropTypes.func,
    onBlock: PropTypes.func,

}

export default memo(UserCard);