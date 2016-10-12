import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temperatures = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.temp);

        return (
            <tr key={cityName}>
                <td>{cityName}</td>
                <td><Chart data={temperatures} color="orange" /></td>
                <td><Chart data={pressures} color="green" /></td>
                <td><Chart data={humidities} color="blue" /></td>
            </tr>
        );
    }


    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>City</td>
                        <td>Temperature</td>
                        <td>Pressure</td>
                        <td>Humidity</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//     return {weather: state.weather};
// }

function mapStateToProps({weather}) {
    return { weather };
}


export default connect(mapStateToProps)(WeatherList);

