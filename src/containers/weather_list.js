import React, {Component} from 'react';
import {connect} from 'react-redux';


class WeatherList extends Component {

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        return (
            <tr key={cityName}>
                <td>
                    {cityName}
                </td>
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

