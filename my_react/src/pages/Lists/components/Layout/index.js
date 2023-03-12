import PropTypes from "prop-types";

import UserCard from "commonComponents/UserCard";

import styles from "./styles.module.css"
import {useEffect, useMemo} from "react";
import {calcAverage} from "../../../../utils";
import {CollectUserIds} from "../../utils/collectUserIds";

const Layout = ({
                    users,
                    handleAddUser,
                    handleRemoveUser,
                    handleBlockUser,
                    // averageUsersAge
}) => {
    // const x = 5;

    // const userDetails = useMemo(() => {
    //     return {
    //         friends: ["Alex", "Max "],
    //         address: {
    //             city: "sdfsrfgs",
    //         },
    //         a: 1,
    //         b: 2,
    //     }
    // },[])

    const averageUsersAge = calcAverage(users);
    const userIds = useMemo(() => {
        return CollectUserIds(users);
    }, [users.length])

    useEffect(() => {
        console.log("recalculated")
    }, [userIds])

    // const averageUsersAge = {};
    //
    // useEffect(() => {
    //     console.log("Recalculated");
    // }, [averageUsersAge])

    return (
        <div>
            <h1>Lists</h1>
            <h2>Average Age: {averageUsersAge}</h2>

            {/*<div>*/}
            {/*    {userIds}*/}
            {/*</div>*/}

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
                       // userDetails={userDetails}
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