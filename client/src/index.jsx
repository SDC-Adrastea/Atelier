import React from "react";
import { App } from './atelier.jsx';
import ReactDOM from 'react-dom';

import './styles/styles.css';


class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and
    // re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    console.log(error, errorInfo);
  }

  // This will render this component wherever called
  render() {
    if (this.state.errorInfo) {

      // Error path
      return (
        <div className="index">
          <h2>Uh Oh... Atelier is having technical Troubles</h2>
          <p>Please try again in a few moments and hopefully we will be back.</p>
        </div>
      );
    }

    return <App />;
  }

}

ReactDOM.render(<ErrorBoundary />, document.getElementById('app'));
