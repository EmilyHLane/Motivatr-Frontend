import React, { Component } from "react";
import axios from "axios";

class QuoteFinder extends Component {
  state = {
    jackHandey: [],
    ronSwanson: []
  };

  componentDidMount() {
    axios
      .get(
        "https://api.mlab.com/api/1/databases/jackhandeyapi/collections/quotes?apiKey=gViXTt2ltpcF0a-Ot-Glb5w577mRXb0p"
      )
      .then(res => {
        const data = res.data;
        const jackHandey = data[0].jackhandey.slice(0, 20);
        // console.log(jackHandey);
        const newArray = jackHandey.map(item => {
          return item.quote;
        });
        this.setState({ jackHandey: newArray });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes/25")
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

    const jackQuotes = this.state.jackHandey;
    const jack = jackQuotes.map(quote => {
      return <p key={quote.slice(0, 20)}>{quote}</p>;
    });

    return (
      <div className="quote-finder-container">
        <h2>Quote Finder</h2>
        <div className="quote-columns">
          <div className="ron-quotes">
            <h3>Classic Ron Swanson</h3>
            {ron}
          </div>
          <div className="jack-quotes">
            <h3>Deep Thoughts, by Jack Handey</h3>
            {jack}
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteFinder;
