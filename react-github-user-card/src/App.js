import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      user: {}
    }
  }

  //run when the component is mounted and is first created - if you want to do something once at the start of a 
  //component's life you put it inside this method 
  componentDidMount(){
    fetch("https://api.github.com/users/TishaHolder")
    //if you are using axios .json is not necessary - tells response object to return data with response (parses json in the request)
    .then(res => res.json())
    .then(data => this.setState({ 
      user: data

    }));   

  }

  //runs every time our component state is updated and we re-render it
  //this will not run on the first render of our component only on re-renders
  componentDidUpdate() {

    console.log(this.state);


  }

  render() {

    return (
      <div>

      </div>

    );
  }

  
}

export default App;
