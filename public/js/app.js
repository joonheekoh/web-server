document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.querySelector('#weather-form');
    const locationInput = document.querySelector('#location-input');
    const messageOne = document.querySelector('#message-1');
    const messageTwo = document.querySelector('#message-2');

    weatherForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const location = encodeURIComponent(locationInput.value);
        
        messageOne.textContent = 'Loading...';
        messageTwo.textContent = '';

        fetch(`/app4/weather?address=${location}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    messageOne.textContent = data.error;
                } else {
                    messageOne.textContent = data.location;
                    messageTwo.textContent = data.forecast;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                messageOne.textContent = 'Error fetching weather data';
            });
    });
});