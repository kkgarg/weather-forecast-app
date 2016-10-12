import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';


class WeatherList extends Component {

    renderWeather(cityData) {
        const cityName = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        console.log(cityData);
        console.log(temps);

        return (
            <tr key={cityName}>
                <td>
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color="red" />
                    </Sparklines> 
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

