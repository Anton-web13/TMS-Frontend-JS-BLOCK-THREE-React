import {Fragment, useCallback, useEffect, useState} from "react";
import Layout from "../components/Layout";
import {v4 as uuid} from "uuid"
import {random} from "lodash"

import {calcAverage} from "../utils/calcAverage";


// const numbers = [1,2,3,4,5];

// const usersList = Array.from({length: 10000}, () => {
//     return {
//         id: uuid(),
//         name: "Alex",
//         age: 25,
//         isBlocked: false,
//     };
// });

const ListsContainer = () => {
    const [users, setUsers] = useState([]);

    const averageUsersAge = calcAverage(users);

    useEffect(() => {
        console.log("Recalculated");
    }, [averageUsersAge])

    const handleAddUser = useCallback(() => {
        const newUser = {
            id: uuid(),
            name: "Alex",
            age: random(1, 85, false),
            isBlocked: false,
        }

        setUsers((state) => [...state, newUser]);

        // setUsers([...users, newUser])
    }, [])

    const handleRemoveUser = useCallback((id) => {
        setUsers((state) => {
            const usersCopy = structuredClone(state);
            const userIndexToRemove = usersCopy.findIndex((user) => user.id === id);
            usersCopy.splice(userIndexToRemove, 1);

            return usersCopy;
        });
    }, [])

    const handleBlockUser = useCallback((id) => {
        setUsers((state) => {
            const usersCopy = structuredClone(state);
            const foundUser = usersCopy.find((user) => user.id === id)

            foundUser.isBlocked= true;

            return usersCopy;
        })
    }, [])

    return (
        <div style={{padding: 25}}>


            <Layout
                users={users}
                handleAddUser={handleAddUser}
                handleRemoveUser={handleRemoveUser}
                handleBlockUser={handleBlockUser}
                averageUsersAge={averageUsersAge}
            />
        </div>
    );
};

export default ListsContainer;