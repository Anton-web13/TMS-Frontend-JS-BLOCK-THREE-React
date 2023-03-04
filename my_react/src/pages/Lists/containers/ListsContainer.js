import {Fragment, useCallback, useState} from "react";
import Layout from "../components/Layout";
import {v4 as uuid} from "uuid"
import cloneDeep from "lodash/cloneDeep"

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

    const handleAddUser = useCallback(() => {
        const newUser = {
            id: uuid(),
            name: "Alex",
            age: new Date().getMilliseconds(),
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
            />
        </div>
    );
};

export default ListsContainer;