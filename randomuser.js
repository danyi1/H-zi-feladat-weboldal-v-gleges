fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
        const user = data.results[0];

        const userInfo = ` 
            <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
            <img id="user-photo" src="${user.picture.large}" alt="User Picture">
        `;

        document.getElementById('user-info').innerHTML = userInfo;
    })
    .catch(error => console.error('Error:', error));
