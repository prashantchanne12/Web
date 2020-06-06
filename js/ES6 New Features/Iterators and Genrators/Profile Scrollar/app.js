const data = [
    {
        name: 'Logan Paul',
        age: 19,
        gender: 'male',
        lookingFor: 'female',
        location: 'mumbai',
        image: 'https://randomuser.me/api/portraits/men/11.jpg'
    },
    {
        name: 'Dani Paul',
        age: 21,
        gender: 'female',
        lookingFor: 'male',
        location: 'Pune',
        image: 'https://randomuser.me/api/portraits/women/11.jpg'
    },
    {
        name: 'Jake Paul',
        age: 20,
        gender: 'male',
        lookingFor: 'female',
        location: 'Delhi',
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
    },
];

// Profile Iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length
                ? { value: profiles[nextIndex++], done: false }
                : { done: true }
        }
    };
}

const profiles = profileIterator(data);

nextProfile();

document.querySelector('#next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.querySelector('#profileDisplay').innerHTML = `
            <ul class="list-group">
                <li class="list-group-item">Name: ${currentProfile.name}</li>
                <li class="list-group-item">Age: ${currentProfile.age}</li>
                <li class="list-group-item">Gender: ${currentProfile.gender}</li>
                <li class="list-group-item">Looking For: ${currentProfile.lookingFor}</li>
                <li class="list-group-item">Location: ${currentProfile.location}</li>
            </ul>
        `;

        document.querySelector('#imageDisplay').innerHTML = `
            <img src="${currentProfile.image}">
        `;
    } else {
        window.location.reload();
    }
}