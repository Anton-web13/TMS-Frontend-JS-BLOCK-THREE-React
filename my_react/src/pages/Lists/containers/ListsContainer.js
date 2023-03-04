import {Fragment, useState} from "react";
import Layout from "../components/Layout";
import {v4 as uuid} from "uuid"
import cloneDeep from "lodash/cloneDeep"

// const numbers = [1,2,3,4,5];

const ListsContainer = () => {
    const [users, setUsers] = useState([]);

    const handleAddUser = () => {
        const newUser = {
            id: uuid(),
            name: "Alex",
            age: new Date().getMilliseconds(),
            isBlocked: false,
        }

        // const stateCopy = [...users];
        // stateCopy.push(newUser);
        // setUsers(stateCopy)

        // users.push(newUser);
        // console.log(users)
        // setUsers(users)

        setUsers([...users, newUser])
    }

    const handleRemoveUser = (id) => {
        const usersCopy = [...users]
        const userIndexToRemove = usersCopy.findIndex((user) => user.id === id)

        usersCopy.splice(userIndexToRemove, 1)

        setUsers(usersCopy);
    }

    const handleBlockUser = (id) => {
        // const usersCopy = [...users];
        // const usersCopy = cloneDeep(users);
        const usersCopy = structuredClone(users);

        const foundUser = usersCopy.find((user) => user.id === id)

        foundUser.isBlocked= true;

        // console.log(users);
        // console.log(usersCopy);

        setUsers(usersCopy);
    }

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