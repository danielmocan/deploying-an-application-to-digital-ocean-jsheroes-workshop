import React,{ Component } from "react";
import Eggs from "./components/Eggs";
import AddEgg from "./components/AddEgg";
import { getEggs, addEgg } from "./api";
import './App.css';

const url = "localhost:3000/eggs";
class App extends Component {
  state = {
    eggs: []
  }
  componentWillMount = async ( ) => {
    const eggs = await getEggs();
    this.setState({
      eggs: eggs
    })
  }

  saveEgg = async ( egg ) => {
    await addEgg( egg );
    const eggs = await getEggs();
    this.setState({
      eggs: eggs
    })
  }

  render() { 
    return (
      <div className="App">
          <Eggs eggs={this.state.eggs} />
          <AddEgg saveEgg={this.saveEgg} />
      </div>
    );
  }
}

export default App;
