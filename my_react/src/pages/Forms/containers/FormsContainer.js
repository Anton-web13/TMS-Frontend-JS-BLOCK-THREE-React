import React, {useState} from 'react';

const FormsContainer = () => {
    const [email, setEmail] = useState('');

    return (
        <>
            <h1>Forms</h1>

            <label>
                {/*<p>Email</p>*/}
                {/*<input type={"email"} value={email} />*/}
            </label>
        </>
    );
};

export default FormsContainer;