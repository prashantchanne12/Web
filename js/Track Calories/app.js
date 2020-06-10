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
            // { id: 0, name: 'Rice', calories: 200 },
            // { id: 1, name: 'Bread', calories: 70 },
            // { id: 2, name: 'Eggs', calories: 120 },
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

        getTotalCalories: function () {
            let total = 0;

            data.items.forEach((item) => {
                total += item.calories;
            });

            data.totalCalories = total;

            return data.totalCalories;
        },

        getItemById: function (id) {
            let res;

            data.items.forEach(item => {
                if (item.id == id) {
                    res = item;
                }
            });

            return res;
        },

        setCurrentItem: function (item) {
            data.currentItem = item;
        },

        getCurrentItem: function () {
            return data.currentItem;
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
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        itemName: '#item-name',
        itemCalories: '#item-calories',
        totalCalories: '.total-calories',
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
        },

        addListItem: function (item) {

            // Show List
            document.querySelector(UISelectors.itemList).style.display = 'block';

            // Create li element
            const li = document.createElement('li');

            // Add class
            li.className = 'collection-item';

            // Add id
            li.id = `item-${item.id}`;

            // Add HTML
            li.innerHTML = `
            <strong>${item.name}: </strong>
            <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
                <i class="edit-item fa fa-pencil"></i>
            </a>`;

            // Insert Item
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);

        },

        showTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },

        clearFields: function () {
            document.querySelector(UISelectors.itemName).value = '';
            document.querySelector(UISelectors.itemCalories).value = '';

        },

        hideList: function () {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },

        addItemToFrom: function () {
            document.querySelector(UISelectors.itemName).value = itemController.getCurrentItem().name;

            document.querySelector(UISelectors.itemCalories).value = itemController.getCurrentItem().calories;

            uiController.showEditState();
        },

        showEditState: function () {

            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },

        clearEditState: function () {
            uiController.clearFields();

            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },

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

        // Edit icon click
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        // Update Item Event
    }

    // ADD ITEM
    const itemSubmit = function (event) {
        // Get form input from UI controller
        const input = uiController.getItemInput();

        // Check for name and calories input
        if (input.name !== '' && input.calories !== '') {

            // Add Item
            const newItem = itemController.addItem(input.name, input.calories);

            // Add Item to UI List
            uiController.addListItem(newItem);

            // Get the total calories
            const totalCalories = itemController.getTotalCalories();

            // Add total calories to UI
            uiController.showTotalCalories(totalCalories);

            // Clear Fields
            uiController.clearFields();
        }

        event.preventDefault();
    }

    // EDIT ITEM CLICK
    const itemEditClick = function (event) {

        if (event.target.classList.contains('edit-item')) {
            // Get list item ID
            const listID = event.target.parentNode.parentNode.id;

            // Break into an array
            const listIdArr = listID.split('-');

            // Get the actual ID
            const id = parseInt(listIdArr[1]);

            // Get item
            const itemToEdit = itemController.getItemById(id);

            // Set current item
            itemController.setCurrentItem(itemToEdit);

            // Add Item to form
            uiController.addItemToFrom();
        }

        event.preventDefault();
    }


    // PUBLIC SCOPE
    return {
        init: function () {
            // init state
            uiController.clearEditState();

            console.log('Initializing App...');

            // Fetch items from data structure
            const items = itemController.getItems();

            // check if there are any items
            if (items.length == 0) {
                uiController.hideList();
            } else {
                // Populate list with items
                uiController.populateItemList(items);

                // Get the total calories
                const totalCalories = itemController.getTotalCalories();

                // Add total calories to UI
                uiController.showTotalCalories(totalCalories);

            }


            // Load Event Listerners
            loadEventListeners();
        }
    }

})(itemController, uiController);

// App Controller
appController.init();