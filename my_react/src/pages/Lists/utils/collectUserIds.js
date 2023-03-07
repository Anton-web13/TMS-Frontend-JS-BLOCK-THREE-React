export const CollectUserIds = (users) => {
    return users.map(({name, id}) => name + id)
};