# Tom's React Practice using DeckofCardAPI:
A simple App using React and an API

## Deploy
- Live @:  https://tomgalpin.github.io/deck_of_cards/
  - From:  https://github.com/gitname/react-gh-pages

## Areas of Improvement:
1. Add testing
2. Add form on init for draw number of cards
3. Add form to add or delete players (within a limit), with name
4. Deal/transition cards to player one a time
5. Fan out cards like in a hand
6. Make CSS better

## Guidelines
Using https://deckofcardsapi.com build an app which will deal a hand of 5 cards and display them.

## Structure
    .
    ├── /public 
    │     └── favicon.ico
    │     └── index.html
    │     └── manifest.json
    ├── /src     
    │     ├── /components
    │     │     ├── cardGame.jsx
    │     │     ├── player.jsx
    │     │     └── card.jsx
    │     ├── /styles                    
    │     │     ├── reset.scss 
    │     │     ├── variables.scss   
    │     │     ├── mixins.scss
    │     │     ├── cardGame.scss
    │     │     ├── player.scss 
    │     │     └── card.scss
    │     ├── app.scss
    │     └── index.jsx
    └── README.md


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
