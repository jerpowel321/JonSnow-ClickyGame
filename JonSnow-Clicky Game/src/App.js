import React, { Component } from "react";
import logo from './logo.svg';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from '../src/components/Nav';
import Jumbotron from '../src/components/Jumbotron';
import Footer from '../src/components/Footer';
import friends from "./friends.json";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
      <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App;
