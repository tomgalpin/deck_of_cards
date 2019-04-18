import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import CardGame from './components/cardGame';


class App extends React.Component {

  render() {
    return(
      <div>
        <h1>Tom's Card Dealing App</h1>
        <CardGame />
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('cards_app')
);