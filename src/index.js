async function getData(location) {
    const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=857d379b247f42ce86f153950232504&q=${location}&aqi=no`,
        { mode: "cors" }
    );

    const data = await response.json();

    const region = await getLocation(data);
    console.log(region);

    const condition = await getCondition(data);
    console.log(condition);

    const temp = await getTemperature(data);
    console.log(temp);

    const wind = await getWind(data);
    console.log(wind);

    const humidity = await getHumidity(data);
    console.log(humidity);

    const feelslike = await getFeel(data);
    console.log(feelslike);

    const time = await getTime(data)
    console.log(time)
}

getData("jijel");

function getLocation(data) {
    const { country, region } = data.location;

    return `${country}, ${region}`;
}

function getCondition(data) {
    const { text } = data.current.condition;
    return text;
}

function getTemperature(data) {
    const { temp_c, temp_f } = data.current;
    return `${temp_c}C°, ${temp_f}F°`;
}

function getWind(data) {
    const { wind_kph, wind_mph } = data.current;
    return `${wind_kph} km/h, ${wind_mph} mi/h`;
}

function getHumidity(data) {
    const { humidity } = data.current;
    return `${humidity}%`;
}

function getFeel(data) {
    const { feelslike_c, feelslike_f } = data.current;
    return `${feelslike_c}C°, ${feelslike_f}F°`;
}

function getTime(data) {
    const { localtime } = data.location;
    return new Date(localtime).toString();
}
