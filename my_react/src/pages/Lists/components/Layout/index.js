import PropTypes from "prop-types";

import UserCard from "commonComponents/UserCard";

const Layout = ({users, handleAddUser, handleRemoveUser}) => {
    // const x = 5;

    return (
        <div>
            <h1>Lists</h1>

            <button onClick={handleAddUser}>Add User</button>
            {/*<button onClick={someMethod(x)}>Some</button>*/}
            {/*<button onClick={() => {*/}
            {/*    someMethod(x)*/}
            {/*}}>Some</button>*/}

            {users.map(({name, age, id}, index) => (
                <UserCard key={id} name={name} age={age} id={id} onDelete={() => handleRemoveUser(id)}/>
            ))}
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