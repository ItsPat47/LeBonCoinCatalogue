import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    const offers = this.props.offersa;
    return (
      <div>
        {" "}
        <div> {console.log("tab", offers)}</div>
        {offers.map((article, index) => {
          return (
            <div key={index}>
              <div className="articleBox">
                {" "}
                <div className="articlePicture"> img </div>
                <div className="articleDesc">
                  <div>
                    <Link to={"/offer" + article._id}>{article.title}</Link>
                  </div>
                  <div>{article.price} </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
