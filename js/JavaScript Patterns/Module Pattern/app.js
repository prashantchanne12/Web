//------------------ MODULE PATTERN ------------------

// IIFE - Immediately Invoked Function Expression

// (function(){
//     // Declare private vars and functions

//     return{

//     }

// })();

const UIControler = (function () {

    // PRIVATE SCOPE
    // Cant access outside the function
    let text = 'Hello Hello';
    let name = 'Prashant';

    const changeText = function () {
        const element = document.querySelector('h1');
        element.textcontent = text;
    }

    return {
        // PUBLIC SCOPE
        callChangeText: function () {
            changeText();
            console.log(text);
        }
    }

})();

UIControler.callChangeText();
console.log(UIControler.name); // Undefined

//-------------  REVEALING MODULE PATTERN -------------

const itemController = (function () {

    // PRIVATE SCOPE
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added..')
    }

    function get(id) {
        return data.find(item => {
            return item.id == id;
        });
    }

    return {
        // PUBLIC SCOPE
        add,
        get,
    };
})();

console.log(itemController.add({ id: 1, name: 'John' }));
console.log(itemController.add({ id: 2, name: 'Logan' }));
console.log(itemController.add({ id: 3, name: 'Jake' }));
console.log(itemController.get(1));