import React, { Component } from "react";
import ImageCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from '../src/components/Nav';
import Jumbotron from '../src/components/Jumbotron';
import Footer from '../src/components/Footer';
import friends from "./friends.json";
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    message: "Click on any image to begin!",
    score: 0,
    topScore: 0,
    oldTopScore: 0,
    guesses: []
  };

  selectCard = id => {
    let message = this.state.message;
    let score = this.state.score;
    let topScore = this.state.topScore;
    let JonSnow = this.state.friends.filter(image => image.id === id)[0];

    if (JonSnow.selected === false) {
      //preparing for different scorings
      message = "";
      score += 1;

      if (topScore < score) {
        topScore = score;
      }

      JonSnow.selected = true;

      this.setState({ score, topScore, message, friends: this.shuffle(this.state.friends) });

    } else {
      this.endGame();

    }
  };
  handleCardClick = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("this has been clicked")
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.friends.id}`);
    // this.setState({
    //   firstName: "",
    //   lastName: ""
    // });
  };
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav 
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
      <Wrapper>
        {/* {this.state.friends.map(friend => (
          <FriendCard 
            id={friend.id}
            key={friend.id}
            image={friend.image}
            onClick={this.handleCardClick}
          />
        ))} */}
        <div className="row mx-5">
              {this.state.friends.map((JonSnow, index) => (
                <ImageCard
                  key={index}
                  selectCard={this.selectCard}
                  index={index}
                  id={JonSnow.id}
                  image={JonSnow.image}
                />
              ))}
            </div>
      </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App;
