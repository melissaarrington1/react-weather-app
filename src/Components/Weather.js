import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
        {this.props.city && this.props.country && (
          <h2>
            City: {this.props.city}, {this.props.country}
          </h2>
        )}
        {this.props.humidity && <p> Humidity:{this.props.humidity}</p>}
        {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
        {this.props.description && <p>Conditions: {this.props.description}</p>}
        {this.props.error && <h2>{this.props.error}</h2>}
      </div>
    );
  }
}

export default Weather;
