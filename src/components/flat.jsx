import React, { Component } from 'react';


class Flat extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      active: false
    }
  }

  chooseFlat = () => {
  console.log(this);
  this.setState({
    active: !this.state.active
  })
  }

  render() {
    const {
      name, price, priceCurrency, imageUrl
    } = this.props;
    return (
      <div onClick={this.chooseFlat} className={this.state.active ? "card active" : "card"} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${imageUrl})` }}>
        <div className="card-category">
          {price}
          {' '}
          {priceCurrency}
        </div>
        <div className="card-description">
          <h2>{name}</h2>
        </div>
      </div>
    );
  }
}

export default Flat;
