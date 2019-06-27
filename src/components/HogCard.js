import React, { Component } from 'react';



class HogCard extends Component {
    
        state ={
            hogsInfo: false,
            hide: false
        }

        displayDetails =() => {
            // console.log("this was clicked")
            this.setState({hogsInfo: !this.state.hogsInfo})
        }

        hideHogs =()=> {
            // console.log("clicked")
           this.setState({hide: !this.state.hide})
        //    we set it to !this.state.hide so we can bring back info-div when we click on hide button again
        // if we set it 'true' we wont be able to change back to initial state
        }


        clickDetails =() =>{
            const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
            const medal ='highest medal achieved'

            if (this.state.hogsInfo === true) {
                
               return (<div> 
                   <h4> specialty: {this.props.hog.specialty} </h4>
                   <h4> greased: {this.props.hog.greased? "true": "false"} </h4>
                   {/* to get value you would use bracket notation [] */}
                   <h4> weight: {this.props.hog[weight]}</h4>
                   <h4> medal: {this.props.hog[medal]}</h4>
                     </div>)
               
                
            
            }
        }

        hideDetails=() =>{
            if (this.state.hide === true) {
                // if its true (if button was clicked) , dont show anything, so its gonna be null
                return null
            
            }else{
                // otherwise it should show hogscard
                // everytime we use multiline inside of a return we have to use ()
                return( 
                <div onClick={this.displayDetails} className="HogCard">
            
                <h3> {this.props.hog.name}</h3>
                {/*in order to get img we had to move folder to public and get from there using process.env.PUBLIC_URL   */}
               <img src={process.env.PUBLIC_URL + `hog-imgs/${this.props.hog.name.replace(/ /g,"_").toLowerCase()}.jpg`}  />
                 {this.clickDetails()}<br/>
                    
             </div>)
            }
        }

   
         

    render() {
        console.log(this.state.hide)
        // console.log("im in card", this.props.hog)
        // console.log('public key', process.env.PUBLIC_URL);
        // console.log(this.props.hog.name)
      return (
          <div>
              {/* we put only hideDetails from line 44, because we have initial state inside that as condition in case we dont want to hide it */}
            {this.hideDetails()}  
            <button onClick={this.hideHogs}> HIDE </button> <br/>
          </div>
      )
    }
  }

  
  export default HogCard;