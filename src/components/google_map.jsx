import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.88184,
      lng: 2.343371
    },
    zoom: 11
  };

  render() {
    return(
      <div className="map-container">
      <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={48.88184}
            lng={2.343371}
          />
        </GoogleMapReact>
      </div>
      )
  }
} 

export default SimpleMap;