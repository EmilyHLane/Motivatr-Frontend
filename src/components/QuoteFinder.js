import React, { Component } from "react";
import axios from "axios";

class QuoteFinder extends Component {
  state = {
    QOD: null,
    ronSwanson: []
  };

  componentDidMount() {
    axios
      .get("http://quotes.rest/qod.json?category=inspire")
      .then(res => {
        const QOD = res.data.contents.quotes[0].quote;
        this.setState({ QOD });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes/10")
      .then(res => {
        const ronSwanson = res.data;
        this.setState({ ronSwanson });
      });
  }

  render() {
    const ronQuotes = this.state.ronSwanson;
    const ron = ronQuotes.map(quote => {
      return <p key={quote.slice(0, 20)}>{quote}</p>;
    });
    return (
      <div>
        <h2>Quote Finder</h2>
        <h3>Quote of the Day via They Said So</h3>
        <p>{this.state.QOD}</p>
        <h3>Classic Ron Swanson</h3>
        {ron}
      </div>
    );
  }
}

export default QuoteFinder;
