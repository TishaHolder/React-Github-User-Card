import React from 'react';
import UserCard from "./components/UserCard.js";
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      userData: {}
    };
  }

  //run when the component is mounted and is first created - if you want to do something once at the start of a 
  //component's life you put it inside this method 
  componentDidMount(){
    fetch("https://api.github.com/users/TishaHolder")
    //if you are using axios .json is not necessary - tells response object to return data with response (parses json in the request)
    console.log(res)
    .then(res => res.json())
    .then(res => this.setState({ userData: res})) 
    .catch(err => console.log("there was an error")); 

  }

  //runs every time our component state is updated and we re-render it
  //this will not run on the first render of our component only on re-renders
  //make subsequent API based on things that have changed
  componentDidUpdate() {

    console.log(this.state);


  }

 

  render() {

    return (
      <div>

        <UserCard user = {this.state.user} />

      </div>

    );
  }

  

  
}

export default App;
