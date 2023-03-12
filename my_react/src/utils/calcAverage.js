const calcAverage = (users) => {
    const userAmount = users.length;

    if (userAmount === 0) {
        return 0;
    }

    return users.reduce((result, {age}) => result + age, 0 ) / userAmount;
}

export default calcAverage;