import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import PlayersList from './Components/PlayersList';
import Header from './Components/Header'
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      players: [],
      error: ""
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log('res', res.data);
      this.setState({...this.state, players: res.data})
    }).catch(err => console.log("error", err))
  }

  render() {
  return (
    <div className="App">
      <Header />
      {this.state.players.map(list =>(
        <PlayersList key={list.id} player={list}/>
  ))}
    </div>
  );}
}

export default App;
