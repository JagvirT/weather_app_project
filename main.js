// console.log('testing...') 
const APIkey = '58279a4e16086989f9f4c7e11bebe2f8'

const get_weather = async (city_name) => {
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${APIkey}`)
    const data = await response.json()
    console.log(data)
    const humidity = document.createElement('h1')
    document.querySelector('.humidity').innerText= 'Humidity: ' + data['main']['humidity'] + "%"
    // humidity.innerText= data['main']['humidity'] + "%"

    const max_temp = document.createElement('h1')
    // max_temp.innerText= (data['main']['temp_max'])
    const max_temp2 = (data['main']['temp_max']) 
    const max_temp3 = parseFloat(((1.8)*(max_temp2 - 273.15)) + 32).toFixed(1)
    document.querySelector('.max_temp').innerText= 'Max. Temp: ' + max_temp3 + "°F"

    const min_temp = document.createElement('h2')
    const min_temp2 = (data['main']['temp_min']) 
    const min_temp3 = parseFloat(((1.8)*(min_temp2 - 273.15)) + 32).toFixed(1)
    document.querySelector('.min_temp').innerText= "Min Temp: " + min_temp3 + "°F"
    // min_temp.innerText = data['main']['temp_min']

    const current_temp = (data['main']['temp'])
    const current_temp2 = parseFloat(((1.8)*(current_temp - 273.15)) + 32).toFixed(1)
    document.querySelector('.current_temp').innerText= current_temp2 + "°F"



    const forecast = document.createElement('h3')
    document.querySelector('.forecast').innerText = 'Forecast: ' + data['weather'][0]['main']
    // forecast.innerText = data['weather'][0]['main']
    let forecast_main = data['weather'][0]['main']
    if (forecast_main === 'Haze'){
        document.querySelector('.card').style.backgroundImage= "url('https://media.istockphoto.com/id/1077679226/photo/black-and-white-smoke.jpg?b=1&s=170667a&w=0&k=20&c=cRJRADyCwOPpmgi22RLsNqR1P_b1qoyZhO8UXn-XlgA=')"
        document.querySelector('.main_part').style.backgroundImage= "url('http://weloveweather.tv/wp-content/uploads/2016/08/PhobiasFog.gif')"
    } else if (forecast_main === 'Clouds'){
        document.querySelector('.card').style.backgroundImage= "url('https://scied.ucar.edu/sites/default/files/styles/half_width/public/2021-10/cumulus-clouds.jpg?itok=qsNXhfWh')"
        document.querySelector('.main_part').style.backgroundImage= "url('https://i.gifer.com/origin/dd/ddedd3a2f4a3995d8cd1a8ab2033c9ce.gif')"
    } else if (forecast_main === 'Clear'){
        document.querySelector('.card').style.backgroundImage= "url('https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618__480.jpg')"
        document.querySelector('.main_part').style.backgroundImage= "url('https://media.tenor.com/reA9KS4hEqsAAAAd/dandelion-nature.gif')"
    } else if (forecast_main === 'Mist'){
        document.querySelector('.card').style.backgroundImage= "url('https://i2-prod.mirror.co.uk/incoming/article9534551.ece/ALTERNATES/s615b/Foggy-weather.jpg')"
        document.querySelector('.main_part').style.backgroundImage= "url('http://weloveweather.tv/wp-content/uploads/2016/08/PhobiasFog.gif')"
    } else if (forecast_main === 'Smoke'){
        document.querySelector('.card').style.backgroundImage= "url('https://static01.nyt.com/images/2022/10/19/us/19weather-pnw/19weather-pnw-superJumbo.jpg')"
        document.querySelector('.main_part').style.backgroundImage= "url('https://i.gifer.com/7Jy5.gif')"
    } else if (forecast_main === 'Rain'){
        document.querySelector('.card').style.backgroundImage= "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_N3mgajhyeHZ15XcG0_VdnybnmYlb0E-qQ&usqp=CAU')"
        document.querySelector('.main_part').style.backgroundImage= "url('https://www.icegif.com/wp-content/uploads/2021/10/icegif-460.gif')"
    }


    const forecast_2 = document.createElement('h4')
    document.querySelector('.forecast2').innerText = data['weather'][0]['description']
    // forecast_2.innerText = data['weather'][0]['description']

    // document.querySelector('.max_temp').append(max_temp)
    // document.querySelector('.min_temp').append(min_temp)
    // document.querySelector('.humidity').append(humidity)
    // document.querySelector('.forecast').append(forecast)
    // document.querySelector('.forecast2').append(forecast_2)
}

// get_weather('London')

const form_data = document.querySelector('form')
form_data.addEventListener('submit', (event) => {
    event.preventDefault()
    const city_data = document.querySelector('#city_data').value
    get_weather(city_data)
})



