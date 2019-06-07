import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import AddFood from './AddFood';
import FoodLog from './FoodLog';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Mock
    this.state = {
      currentMacros: {
          carbs: 0,
          fat: 0,
          protein: 0
      },
      goalMacros: {
          carbs: 250,
          fat: 36,
          protein: 180
      },
      log: [
        // {
        //   name: "Pizza",
        //   carbs: 30,
        //   fat: 10,
        //   protein: 50
        // },
        // {
        //   name: "Burger",
        //   carbs: 20,
        //   fat: 20,
        //   protein: 60
        // }
      ]
    }
  }

  componentDidMount = () => console.log("MOUNT: ", this.state);
  componentDidUpdate = () => console.log("UPDATE: ", this.state);
  componentWillUnmount = () => console.log("UNMOUNT: ", this.state);

  updateMacros = ({carbs = 0, fat = 0, protein = 0}) => {
    this.setState((state) => {
      const { carbs: currCarbs, fat: currFat, protein: currProtein } = state.currentMacros;
      return {
        currentMacros: {
          carbs: currCarbs + carbs,
          fat: currFat + fat,
          protein: currProtein + protein
        }
      }
    });
  };

  addToLog = (entry) => {
    this.setState((state) => {
      const { log } = state;
      log.push(entry);
      return {
        log
      }
    })
  };

  addFood = entry => {
    this.addToLog(entry);
    this.updateMacros(entry);
  };

  render() {
    const updaterFunctions = {
      addFood: this.addFood
    };

    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' render={props => <Home {...props} {...this.state}/>} />
          <Route path='/add' render={props => <AddFood {...props} {...this.state} {...updaterFunctions}/>} />
          <Route path='/log' render={props => <FoodLog {...props} {...this.state}/>} />
          <Route path='/profile' component={Profile} />
        </div>
      </Router>
    );
  }
}

const Profile = () => (
  <div>
    <h2>Profile</h2>
  </div>
);

export default App;
