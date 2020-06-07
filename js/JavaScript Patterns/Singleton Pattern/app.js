// --------------- SINGLE PATTERN --------------

const singleTon = (function () {

    let instance;

    function createInstance() {
        const data = { name: 'Prashant', age: 19 };
        return data;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
                return instance;
            }
        }
    }

})();

const instanceA = singleTon.getInstance();
const instanceB = singleTon.getInstance();

console.log(instanceA); //  { name: 'Prashant', age: 19 }
console.log(instanceB); // undfined
console.log(instanceA === instanceB); // false
