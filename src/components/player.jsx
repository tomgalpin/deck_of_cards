import React from 'react';
import Card from './card';

class Player extends React.Component {

  renderCards(array) {
    if (array.length) {
      return array.map( (card, index) => {
        return  <Card
                  key={index}
                  image={card.image}
                  code={card.code}
                />
      })
    } else {
      const num = this.props.draw;
      return [...Array(num)].map((element, index) => {
        return <li key={index }className="card"></li>
      });
    }
  }
  
  render() {
    return(
      <li className="player">
        <div className="name_container">
          <p>Player: {this.props.name}</p>
        </div>
        <div className="cards_container">
          <ol>{this.renderCards(this.props.cards)}</ol>
        </div>
      </li>
    )
  }
}

export default Player;