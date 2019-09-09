import React, { Component } from 'react';
import Flat from './flat.jsx';
import flats from '../../data/flats.js';

class FlatList extends Component {


  renderFlats = () => {
    return (flats.map(({
      name, price, priceCurrency, imageUrl, lat, lng
    }) => <Flat key={name} name={name} price={price} priceCurrency={priceCurrency} imageUrl={imageUrl} lat={lat} lng={lng}/>));
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
