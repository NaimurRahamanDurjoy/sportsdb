const loadUsers = () => {
    const url = `https://randomuser.me/api/?results=50`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}
loadUsers();

const displayUsers = users => {
    console.log(users);
    const usersDiv = document.getElementById('users');
    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('rand-users');
        div.innerHTML = `
            <img src="${user.picture.large}">
            <h2>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h2>
            <p>City: ${user.location.city}</p>
            <h4>Street: </h4>
            <p>Name: ${user?.location.street?.name}</p>
            <p>Number: ${user?.location.street.number}</p>
            <h4>Coordinates:</h4>
            <p>Latitude: ${user.latitude}</p>
            <p>Longitude: ${user.longitude}</p>
            <h4>Timezone:</h4>
            <p>Description: ${user.description}</p>
            <p>Offset: ${user.offset}</p>

        `;
        usersDiv.appendChild(div);
    })
}