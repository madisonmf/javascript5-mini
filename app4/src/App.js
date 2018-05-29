import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this);
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles').then(response => {
      this.setState({
        cars: response.data
      })
      console.log(this.state.cars);
    })
  }

  render() {
    const carsList = this.state.cars.map( list => {
      return (
        <div key={ list.id }>
          <p>Make: {list.make} </p>
          <p>Model: {list.model}</p>
          <p>Year: {list.year}</p>
          <p>Color: {list.color}</p>
        </div>
      )
    })
    return (
      <div className={this.props.cars}>
        <button onClick={ this.getCars }>Get cars</button>
        {carsList}
      </div>
    );
  }
}

export default App;