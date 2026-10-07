async function getVisitorWeather() {
    console.log("getting forecast");

    // js incase the browswer has issues
    if (!navigator.geolocation) {
        console.error("cannot geolocate, probably a browser issue D:");
        return;
    }

    // gets location
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            console.log("location obtained");

            // needed for API request, user location
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(latitude, longitude);

            // api URL, doesnt need to be secret. it is open to the public
            const url =
                `http://openaccess.pf.api.met.ie/metno-wdb2ts/locationforecast?lat=${latitude};long=${longitude}`;

            console.log("Requesting:", url);
            const response = await fetch(url);
            const forecast = await response.text();
            console.log("Forecast:", forecast);
            displayForecast(forecast);
        },
    );
}
function displayForecast(forecast) {
// i will use this for displaying cool data soon...
}

getVisitorWeather();
