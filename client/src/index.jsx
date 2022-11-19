import React from 'react';
import ReactDOM from 'react-dom';
import { Questions } from './components/Questions.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Atelier</h1>
        <Questions />
        <h2>Meow</h2>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));