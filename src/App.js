import axios from "axios";
import React from "react";
import { RenderMovie } from "./components/movies";
class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("엠자탈모");
  }
  state = {
    isLoading: true,
    movies: {},
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
  async componentDidMount() {
    const movieResults = {};
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=106ab699e8e239357e9cdd4f9ac16511&language=ko`
      )
      .then((json) => {
        movieResults.popular = json.data.results;
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
    console.log(this.state.movies);

    this.setState((curr) => (curr.isLoading = false));
  }
  render() {
    this.Talmo();
    return (
      <div>
        {this.state.isLoading ? (
          "Loading..."
        ) : (
          <div class="movieList">
            <popular>
              <h1>Popular Movie List</h1>
              {this.state.movies["popular"].map((element) => (
                <RenderMovie
                  title={element.title}
                  poster_path={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${element.poster_path}`}
                  release_date={element.release_date}
                  overview={element.overview}
                />
              ))}
              <h1>----------</h1>
            </popular>
            <upcoming>
              <h1>Upcoming Movie List</h1>
              {this.state.movies["upcoming"].map((element) => (
                <RenderMovie
                  title={element.title}
                  poster_path={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${element.poster_path}`}
                  release_date={element.release_date}
                  overview={element.overview}
                />
              ))}
              <h1>----------</h1>
            </upcoming>
            <toplank>
              <h1>Top-lank Movie List</h1>
              {this.state.movies["topLank"].map((element) => (
                <RenderMovie
                  title={element.title}
                  poster_path={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${element.poster_path}`}
                  release_date={element.release_date}
                  overview={element.overview}
                />
              ))}
              <h1>----------</h1>
            </toplank>
          </div>
        )}
      </div>
    );
  }
}
export default App;
