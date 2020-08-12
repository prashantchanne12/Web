import Tooltip from './ui/tooltip';
import Dropdown from './ui/dropdown';

// CREATE A TOOLTIP
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// CREATE DROPDOWNS
const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});