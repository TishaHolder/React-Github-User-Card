import React from 'react';
import UserCard from "./components/UserCard.js";
import FollowersList from "./components/FollowersList.js";
import SearchForm from "./components/SearchForm.js";
import BlankCard from "./components/BlankCard.js";
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      userName: "TishaHolder",
      userData: {},
      followersData: [{}]
    };
  } 
 

  fetchUser = () => {

    fetch(`https://api.github.com/users/${this.state.userName}`)

    //if you are using axios .json is not necessary - tells response object to return data with response (parses json in the request)    
    .then(res => res.json())
    .then(data => this.setState({ userData: data})) 
    .catch(err => console.log("there was an error")); 

  }

  fetchFollowers = () => {

    fetch(`https://api.github.com/users/${this.state.userName}/followers`)

    //if you are using axios .json is not necessary - tells response object to return data with response (parses json in the request)    
    .then(res => res.json())
    .then(data => this.setState({ followersData: data})) 
    .catch(err => console.log("there was an error")); 

  }

  searchedUserName = (userName) => {
    this.setState ( {userName});

  }

  //run when the component is mounted and is first created - if you want to do something once at the start of a 
  //component's life you put it inside this method 
  componentDidMount(){       

      this.fetchUser();
      this.fetchFollowers();     

  }

  //runs every time our component state is updated and we re-render it
  //this will not run on the first render of our component only on re-renders
  //make subsequent API request based on things that have changed
  componentDidUpdate(prevProps, prevState) {

    console.log(this.state);
    
    if (this.state.userName !== prevState.userName) {
      this.fetchUser();
      this.fetchFollowers();
    }


  } 

  render() {    
     
      return (
        
        <div className = "main-container-div">    

          <div className = "main-search-div">      

              <SearchForm searchedUserName = {this.searchedUserName}/>    

          </div>        

          <div className = "search-results-div">

            <div className = "users-content">              
              <UserCard user = {this.state.userData} />              
            </div>

            <div>

              <FollowersList followers = {this.state.followersData} />

            </div>

          </div>

        </div>

      );//end return   
    

  }//end render

}//end class

export default App;
