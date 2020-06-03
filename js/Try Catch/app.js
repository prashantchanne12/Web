const user = { email: 'hello@gmail.com' };

// ---------------------------------
try {
    // Produces ReferenceError
    myfunction();

} catch (e) {

    /* ReferenceError: myfunction is not defined
    at app.js:3 */
    console.log(e);

    // myfunction is not defined
    console.log(e.message);

    // ReferenceError
    console.log(e.name);

} finally {
    console.log('Always runs');
}

console.log('Programe Continues..');

// ---------------------------------

try {

    if (!user.name) {
        // throw 'User has no name';
        throw new SyntaxError('User has no name : ');
    }

} catch (e) {

    console.log(e);

} finally {

}