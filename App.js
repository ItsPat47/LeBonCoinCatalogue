import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./containers/Header";
import Home from "./containers/Home";
import "./App.css";
import axios from "axios";
import Article from "./containers/Article";

class App extends Component {
  state = {
    offers: [],
    error: false,
    loading: true
  };
  render() {
    if (this.state.loading === true) {
      return <div>Loading...</div>;
    } else
      return (
        <div>
          <Header />
          <Router>
            <Switch>
              <div className="marge">
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Home {...props} offersa={this.state.offers} /> //liste article
                  )}
                />
              </div>
              <Route path="/offer/" render={props => <Article {...props} />} />
            </Switch>
          </Router>
        </div>
      );
  }
  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/with-count"
      );
      this.setState({ offers: response.data.offers, loading: false });
    } catch (error) {
      this.setState({ error: true });
    }
  }
}

export default App;
