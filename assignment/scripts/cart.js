console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;
let fullBool = false;

function isFull() {
    if (basket.length < maxItems) {
        fullBool = false;
    }
    else {
        fullBool = true;
    }
    return fullBool;
}

function addItem(item) {
    if (isFull() == false) {
        basket.push(item);
        return true;
    }
    else {
        return false;
    }
}

function listItems(array) {
    console.log('Basket contains:');
    for (let item of array) {
        console.log(item);
    }
}

function empty(array) {
    while (array.length > 0) {
        array.pop();
    }
    return array;
}

function removeItem(item) {
    let index = basket.indexOf(item);
    if (index == -1) {
        return null;
    }
    else {
        removedItem = basket.splice(index, 1);
        return removedItem.toString();
    }
}

addItem('Celery');
addItem('Carrot');
addItem('Apple');
listItems(basket);
console.log('*** Removed', removeItem('Apple'));
console.log(`Basket is now ${basket}`);
console.log('Emptied basket', empty(basket))




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
