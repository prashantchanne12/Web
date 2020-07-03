const users = [
    { name: 'Prashant', premium: true },
    { name: 'Logan', premium: false },
    { name: 'Jake', premium: true },
    { name: 'Jessica', premium: true },
    { name: 'Marths', premium: false },
];

const getPremiumUsers = users => {
    return users.filter(user => user.premium);
}

// export default users;

export { getPremiumUsers, users as default }

