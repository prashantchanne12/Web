const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const updateUI = (data) => {

    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    // DESTRUCTURING PROPERTIES
    const { cityDetails, weather } = data;

    // UPDATE DETAILS TEMPLATE
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div> 
    `;

    // UPDATE THE NIGHT / DAY & ICON IMAGES
    let timeSrc = null;
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;

    icon.setAttribute('src', iconSrc); 

    if (weather.IsDayTime) {
        timeSrc = 'img/day.svg';
    } else {
        timeSrc = 'img/night.svg';
    }

    time.setAttribute('src', timeSrc);

    // REMOVE d-none CLASS IF PRESENT
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails, weather };

};

cityForm.addEventListener('submit', (e) => {

    e.preventDefault();

    // GET CITY VALUE
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // UPDATE UI WITH NEW CITY
    updateCity(city)
        .then(data => { updateUI(data); })
        .catch(err => { console.log(err) });
});