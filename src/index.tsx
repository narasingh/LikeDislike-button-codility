import * as React from "react";
import { render } from "react-dom";
import "./styles.css";

class Buttons extends React.Component {

  state = {
    hasLiked: false,
    hasDisliked: false,
    like: 100,
    disLike: 25
  }

  handleLike = () => {
    if(!this.state.hasDisliked) {
      this.setState({
        hasLiked: !this.state.hasLiked
      });
    }else {
      this.setState({
        hasLiked: true,
        hasDisliked: false
      });
    }
  }

   handleDislike = () => {
    if(!this.state.hasLiked) {
      this.setState({
        hasDisliked: !this.state.hasDisliked
      });
    }else {
      this.setState({
        hasLiked: false,
        hasDisliked: true
      });
    }
  }

  render() {
    const { hasDisliked, hasLiked } = this.state;
    const classLikeButton = `like-button ${hasLiked ? 'liked': ''}`;
    const classDisLikeButton = `dislike-button ${hasDisliked ? 'disliked': ''}`;

    return (
      <div>
        <button className={classLikeButton} onClick={this.handleLike}>
          Like |
          <span className="likes-counter">
            {this.state.hasLiked ? this.state.like + 1 : this.state.like}
          </span>
        </button>
        <button className={classDisLikeButton} onClick={this.handleDislike}>
          Dislike |
          <span className="dislikes-counter">
            {this.state.hasDisliked ? this.state.disLike + 1 : this.state.disLike}
          </span>
        </button>
      </div>
    );
  }
}

function App() {
  return <Buttons />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
