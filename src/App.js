import React from 'react';
import Home from './Home'
import Taxulator from './taxulator'

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      route: 'app',
      searchField: 0
    }

  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  onSearchChange = (event) => {
		this.setState({searchField: event});
	}

  



  render() {
    

    return (
        <div>
            {this.state.route === 'app'
            ?<Home onRouteChange = {this.onRouteChange} onSearchChange = {this.onSearchChange} />
            :<Taxulator i = {this.state.searchField} j = {9875} k = {518401} />
            
            }


        </div>
      


    )
  }


}

export default App;