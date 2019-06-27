import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogTiles from './HogTiles'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs: hogs
  }

  filterHogs = () => {
    // 1st filter through pigs and store it into variable
    const filterHogs = this.state.hogs.filter(hog => {
      return hog.greased
    })
    // 2nd use variable to change the state , so it will show only what we asking 
    this.setState({hogs: filterHogs})
  }

  sortByName =() => {
    
    const sortByName = this.state.hogs.sort((a,b)=> {
      return a.name.localeCompare(b.name)
    })
    // we have to use setstate to display what we asking it to display, without it it doesnt show anything
    this.setState({hogs: sortByName})
    // console.log(sortByName)
  }

  sortByWeight =()=>{
    const weight ="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    const sortByWeight = this.state.hogs.sort((a,b) =>{
      return a[weight]- b[weight]
    })
    this.setState({hogs: sortByWeight})
  }
  render() {
    // console.log(hogs)
    return (
      <div className="App">
          < Nav />
          <button onClick={this.filterHogs}> Filter by greased </button><br/>
          <button onClick ={this.sortByName}>Sort by name</button><br/>
          <button onClick ={this.sortByWeight}>Sort by weight</button><br/>
          <HogTiles hogs={this.state.hogs} />

      </div>
    )
  }
}

export default App;
