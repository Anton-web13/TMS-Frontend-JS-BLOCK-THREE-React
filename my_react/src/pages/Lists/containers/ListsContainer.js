import {Fragment, useState} from "react";
import Layout from "../components/Layout";
import {v4 as uuid} from "uuid"

// const numbers = [1,2,3,4,5];

const ListsContainer = () => {
    const [users, setUsers] = useState([]);

    const handleAddUser = () => {
        const newUser = {
            id: uuid(),
            name: "Alex",
            age: new Date().getMilliseconds(),
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

    return (
        <div style={{padding: 25}}>


            <Layout
                users={users}
                handleAddUser={handleAddUser}
                handleRemoveUser={handleRemoveUser}
            />
        </div>
    );
};

export default ListsContainer;