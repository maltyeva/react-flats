import React, { Component } from 'react';
import FlatList from './flat_list.jsx';
import SimpleMap from './google_map.jsx'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: null, 
      lng: null
    }
  }

  updateMap = (lat, lng) => {
    this.setState({
      lat: lat, 
      lng: lng
    })
  }
  render() {
    return (
      <div>
      <FlatList setMarker={this.updateMap}/>
      <SimpleMap lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}

export default App;
