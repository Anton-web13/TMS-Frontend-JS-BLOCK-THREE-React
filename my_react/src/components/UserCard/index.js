import {Component, memo} from "react";
// import {PureComponent, memo} from "react";

import styles from "./styles.module.css"
import * as PropTypes from "prop-types";

// class UserCard extends PureComponent {
//     render() {
//         const {name, age, image} = this.props;
//         return (
//             <div className={`${styles.wrapper}`}>
//                 <img src={image} alt="party_photo" width={200} height={150}/>
//                 <h1 className={styles.name}>User name: {name}</h1>
//                 <h2 className={styles.age}>Age: {age}</h2>
//             </div>
//         );
//     }
// }

const UserCard = ({name, age, image, someObject}) => {
    console.log("User Card Rendered")
    return (
        <div className={`${styles.wrapper}`}>
            <img src={image} alt="party_photo" width={200} height={150}/>
            <h1 className={styles.name}>User name: {name}</h1>
            <h2 className={styles.age}>Age: {age}</h2>
        </div>
    );
}

UserCard.propTypes = {
    name: PropTypes.any,
    age: PropTypes.any,
    image: PropTypes.any,
    children: PropTypes.any
}

export default memo(UserCard);