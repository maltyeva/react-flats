import React, { Component } from 'react';
import Flat from './flat.jsx';
import flats from '../../data/flats.js';

class FlatList extends Component {

  constructor(props) {
    super(props) 

    this.state = {
      marketLat: null, 
      markerLng: null
    }
  }

  markerHandler = (lat, lng) => {
    this.setState({
      markerLat: lat, 
      markerLng: lng
    })
    this.props.setMarker(lat, lng)

  }
  renderFlats = () => {
    return (flats.map(({
      name, price, priceCurrency, imageUrl, lat, lng
    }) => <Flat setMarker={this.markerHandler} key={name} name={name} price={price} priceCurrency={priceCurrency} imageUrl={imageUrl} lat={lat} lng={lng}/>));
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderFlats()}
      </div>
    );
  }
}

export default FlatList;
