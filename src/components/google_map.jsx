import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';

class SimpleMap extends Component {

  constructor(props) {
    super(props)

    this.state = {
      center: {
        lat: 48.88184,
        lng: 2.343371
      }
    }
  };

  static defaultProps = {
    zoom: 14
  };


  render() {
 
    return(
      <div className="map-container">
      <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.state.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
      )
  }
} 

export default SimpleMap;