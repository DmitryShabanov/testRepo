// core
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

//actions
import * as appActions from "../../actions/app";
import { postsSelector } from "../../selectors";

// styles
import "./App.css";

class App extends Component {
  componentDidMount() {
    const { getPosts } = this.props.actions;

    getPosts();
  }

  render() {
    const { posts } = this.props;

    if (posts.length < 1) {
      return null;
    }

    console.log('state.posts', posts);

    return (
      <div>
        {posts.map((item, index) => (
          <article key={index + 1} className="article">
            <h2 className="article_title">{item.title}</h2>
            <p className="article_body">{item.text}</p>
            <p className="article_author">{item.author}</p>
          </article>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: postsSelector(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...appActions }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
