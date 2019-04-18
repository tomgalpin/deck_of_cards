import React from 'react';
import axios from 'axios'
import Player from './player';


class CardGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {},
      draw: 5,
      cardsDealt: [],
      players: [
        {
          "name": "Tom",
          "cards": []
        }
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  setPlayerData() {
    const cardsDealt = this.state.cardsDealt;
    const playersState = this.state.players;
    const draw = this.state.draw;
    let cards = [];
    let players = [];

    for (let i=0; i < cardsDealt.length; i+=draw) {
      const playerCards = cardsDealt.slice(i, i+draw);
      cards.push(playerCards);
    }

    for (let i=0; i < playersState.length; i++)  {
      const playerName = playersState[i].name;
      const playerCards = cards[i];
      const playerData = {
        name: playerName,
        cards: playerCards,
      };

      players.push(playerData);
      this.setState({ players: players });
    }
  }

  clearDeck() {
    if (this.state.cardsDealt.length) {
      this.setState({ deck: {} });
      this.setState({ cardsDealt: []});

      this.initDeck();
    } 
  }
  handleClick() {
    if (this.state.cardsDealt.length) {
      this.clearDeck(); 
    }
    this.deal();
  }

  initDeck() {
    const shuffleAPI = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

    axios.get(shuffleAPI)
    .then(response => {
      const deckData = response.data;
      this.setState({deck: deckData});
    });
  }

  deal() {
    const deckID = this.state.deck.deck_id;
    const numPlayers = this.state.players.length;
    const numCardsDealt = this.state.draw * numPlayers;
    const drawAPI = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=${numCardsDealt}`;

    return axios.get(drawAPI).then( response => {
      this.setState({ cardsDealt: response.data.cards });
      this.setPlayerData();
    });
  };

  renderPlayers(array) {
    return array.map( (player, index) => {
      return <Player
                key={index}
                name={player.name}
                cards={player.cards}
                draw={this.state.draw}
              />
    });
  }

  componentDidMount() {
    this.initDeck()
  }

  render() {
    return (
      <div className="game_container">
        <div className="play_container">
          <button className="deal" onClick={this.handleClick}>Shuffle & Deal Cards</button>
        </div>
        <ol>
          {this.renderPlayers(this.state.players)}
        </ol>
      </div>
    )
  }
}

export default CardGame;