import axios from "axios";
import React from "react";
import { RenderMovie } from "./components/movies";
import "./css/App.css";
import "./css/movies.css";
class App extends React.Component {
  state = {
    isLoading: true,
    movies: {},
    selectMovie: null,
  };
  Talmo() {
    console.log(
      "%c☆★탈모빔★☆",
      `background-image:url("https://pbs.twimg.com/profile_images/1157826618661806080/K2qrDocr_400x400.jpg");background-size:100px 200px;color:teal;font-size:60px;`
    );
    console.log(
      "당신은 개발자 콘솔에 손을 댔으므로 탈모빔에 맞으셨습니다. 이 저주는 풀 수 없습니다. 바꿔줄 수 없어 돌아가."
    );
  }
  handleSelectMovie = (newObject) => {
    this.setState({ selectMovie: newObject });
  };

  async componentDidMount() {
    const movieResults = {};
    await axios
      .get(
        `https://api.themoviedb.org/3/trending/all/week?api_key=106ab699e8e239357e9cdd4f9ac16511&language=ko`
      )
      .then((json) => {
        movieResults.weektrend = json.data.results;
      });
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=106ab699e8e239357e9cdd4f9ac16511&language=ko`
      )
      .then((json) => {
        movieResults.upcoming = json.data.results;
      });
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=106ab699e8e239357e9cdd4f9ac16511&language=ko`
      )
      .then((json) => {
        movieResults.topLank = json.data.results;
      });
    this.setState((curr) => (curr.movies = movieResults));
    this.setState((curr) => (curr.isLoading = false));
  }
  render() {
    console.log(this.state);
    this.Talmo();
    return (
      <div className="container">
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <div className="movieList">
              <h1>주간 트렌드</h1>
              <popular className="movieSection">
                {this.state.movies["weektrend"].map((element) => (
                  <RenderMovie
                    title={element.title || element.name}
                    poster_path={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${element.poster_path}`}
                    release_date={
                      element.release_date || element.first_air_date
                    }
                    overview={element.overview}
                    alt={element.title || element.name}
                    genres={element.genre_ids}
                    updateState={this.handleSelectMovie}
                    vote_average={element.vote_average}
                  />
                ))}
              </popular>
              <h1>출시 예정</h1>
              <upcoming className="movieSection">
                {this.state.movies["upcoming"].map((element) => (
                  <RenderMovie
                    title={element.title || element.name}
                    poster_path={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${element.poster_path}`}
                    release_date={
                      element.release_date || element.first_air_date
                    }
                    overview={element.overview}
                    alt={element.title || element.name}
                    genres={element.genre_ids}
                    updateState={this.handleSelectMovie}
                    vote_average={element.vote_average}
                  />
                ))}
              </upcoming>
              <h1>톱-랭크</h1>
              <toplank className="movieSection">
                {this.state.movies["topLank"].map((element) => (
                  <RenderMovie
                    title={element.title || element.name}
                    poster_path={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${element.poster_path}`}
                    release_date={
                      element.release_date || element.first_air_date
                    }
                    overview={element.overview}
                    alt={element.title || element.name}
                    genres={element.genre_ids}
                    updateState={this.handleSelectMovie}
                    vote_average={element.vote_average}
                  />
                ))}
              </toplank>
            </div>
            <div className="movieDetail">
              {this.state.selectMovie == null ? (
                <p className="loading">Nothing selected</p>
              ) : (
                <div className="details">
                  <div className="detail">
                    <img
                      src={this.state.selectMovie.poster_path}
                      alt={this.state.selectMovie.title}
                    ></img>
                    <h2>{this.state.selectMovie.title}</h2>
                    <span>{this.state.selectMovie.release_date}</span>
                    <span> / {this.state.selectMovie.vote_average}</span>
                    <span> / {this.state.selectMovie.genre}</span>
                  </div>
                  <p>
                    {this.state.selectMovie.overview == null ? (
                      <p>no description</p>
                    ) : (
                      this.state.selectMovie.overview
                    )}
                  </p>
                </div>
              )}
              <a href="https://github.com/jms080809">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
