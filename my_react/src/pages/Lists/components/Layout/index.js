import PropTypes from "prop-types";

import UserCard from "commonComponents/UserCard";

import styles from "./styles.module.css"

const Layout = ({users, handleAddUser, handleRemoveUser, handleBlockUser}) => {
    // const x = 5;

    return (
        <div>
            <h1>Lists</h1>

            <button onClick={handleAddUser}>Add User</button>
            {/*<button onClick={someMethod(x)}>Some</button>*/}
            {/*<button onClick={() => {*/}
            {/*    someMethod(x)*/}
            {/*}}>Some</button>*/}

           <div className={styles.cardsArea}>
               {users.map(({name, age, id, isBlocked}, index) => (
                   <UserCard
                       key={id}
                       name={name}
                       age={age}
                       id={id}
                       isBlocked={isBlocked}
                       onDelete={handleRemoveUser}
                       onBlock={handleBlockUser}
                   />
               ))}
           </div>
        </div>
    );
};


Layout.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    })),
};

export default Layout;