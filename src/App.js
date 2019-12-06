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
      this.setState({ 
        score, 
        topScore, 
        message, 
        friends: this.shuffle(this.state.friends) 
      });

    } else {
      this.endGame();

    }
  };

  endGame = () => {
    let topScore = this.state.topScore;
    let oldTopScore = this.state.oldTopScore;
    let score = this.state.score;
    let message = this.state.message;
    if (oldTopScore < topScore) {
      oldTopScore = topScore;
      message = `Awesome, your new Top Score is ${topScore}!`
    } 
    else {
      message = "Oh no, that wasn't right. Try agin."
    }

    score = 0;
    this.state.friends.map((JonSnow, index) => {
      return JonSnow.selected = false;

    })

    this.setState({ score, topScore, oldTopScore, message})
  }

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;

  }

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
        <h1 className="display-4 align-text-bottom text-center">Clicky Game!</h1>
                <b><p className="lead align-text-bottom text-center">Click on an image to earn points, but don't click on any image more than once!</p></b>
      <Wrapper>
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
