import React, { Component } from 'react';
import HogCard from './HogCard'


class HogTiles extends Component {

     hogsList =  () =>{
       return  this.props.hogs.map(hog => {
            return <HogCard hog={hog} key={hog.name} />
        })
     } 
    
    render() {

        // console.log("in hogtiles", this.props.hogs)
      return (
        <div className="HogTiles">
           {this.hogsList()}
           
  
        </div>
      )
    }
  }
  
  export default HogTiles;