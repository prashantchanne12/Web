// Storage Controller

// Item Controller
const itemController = (function () {

    // PRIVATE SCOPE
    class item {
        constructor(id, name, calories) {
            this.id = id;
            this.name = name;
            this.calories = calories;
        }
    }

    // Data Structure / State
    const data = {
        items: [
            { id: 0, name: 'Rice', calories: 200 },
            { id: 1, name: 'Bread', calories: 70 },
            { id: 2, name: 'Eggs', calories: 120 },
        ],
        currentItem: null,
        totalCalories: 0
    }

    // PUBLIC SCOPE
    return {

        getItems: function () {
            return data.items;
        },

        addItem: function (name, calories) {
            let id;
            // Create ID
            if (data.items.length > 0) {
                id = data.items.length;
            } else {
                id = 0;
            }

            // Calories to number
            calories = parseInt(calories);

            // Create new Item
            newItem = new item(id, name, calories);
            data.items.push(newItem);

            return newItem;

        },

        logData: function () {
            return data;
        }
    }

})();

// UI Controller
const uiController = (function () {

    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemName: '#item-name',
        itemCalories: '#item-calories',

    }

    // PUBLIC SCOPE
    return {
        populateItemList: function (items) {

            let html = '';

            items.forEach((item) => {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong>
                <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
            </li>`
            });

            // Insert List Item
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },

        getSelectors: function () {
            return UISelectors;
        },

        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemName).value,
                calories: document.querySelector(UISelectors.itemCalories).value,
            }
        }
    }


})();

// App Controller
const appController = (function (itemController, uiController) {

    // Load EventListenrs
    const loadEventListeners = function () {
        // Get UI Selectors
        const UISelectors = uiController.getSelectors();

        // Add Item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemSubmit);
    }

    // ADD ITEM
    const itemSubmit = function (event) {
        // Get form input from UI controller
        const input = uiController.getItemInput();

        // Check for name and calories input
        if (input.name !== '' && input.calories !== '') {

            // Add Item
            const newItem = itemController.addItem(input.name, input.calories);

        }

        event.preventDefault();
    }


    // PUBLIC SCOPE
    return {
        init: function () {
            console.log('Initializing App...');

            // Fetch items from data structure
            const items = itemController.getItems();

            // Populate list with items
            uiController.populateItemList(items);

            // Load Event Listerners
            loadEventListeners();
        }
    }

})(itemController, uiController);

// App Controller
appController.init();