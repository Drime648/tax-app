


import React from 'react';
import './App.css';

class Home extends React.Component {

  constructor() {
    super();
    this.state = {
    }

  }

  onSearchChange = (event) => {
    this.props.onSearchChange(event.target.value)
  }

  onButtonClicked = () => {

    this.props.onRouteChange('tax')
    
  }



  render() {
    

    return (
      


      <div>
        <form className="measure center">


          <div className="mt3">
            <label className="db fw6 lh-copy f6 tc f4 fw6 ph0 mh0" htmlFor="user-name">Yearly Income</label>
              <input 
              type = "number"
              onChange = {this.onSearchChange}
              className="pa2 input-reset ba bg-transparent w-100" 
              name="income"  
              id="income"/>
          </div>
          <br></br>




          <div className = "center">
            <input 
              className="center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="submit"
              onClick = {() => this.onButtonClicked()}/>
          </div>










      
        
        </form>
      </div>
    )
  }


}



export default Home;
