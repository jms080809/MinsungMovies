import react from "react";
export class RenderMovie extends react.Component {
  genreList(value) {
    switch (value) {
      case 28:
        return "Action";

      case 12:
        return "Adventure";

      case 16:
        return "Animation";

      case 35:
        return "Comedy";

      case 80:
        return "Crime";

      case 99:
        return "Documentary";

      case 18:
        return "Drama";

      case 10751:
        return "Family";
      case 36:
        return "History";
      case 14:
        return "Fantasy";

      case 27:
        return "Horror";

      case 10402:
        return "Music";

      case 9648:
        return "Mystery";

      case 10749:
        return "Romance";

      case 878:
        return "SF";

      case 10770:
        return "TV Movie";

      case 53:
        return "Thriller";

      case 10752:
        return "War";

      case 37:
        return "Westeren";
      case 10759:
        return "Action & Adventure";
      case 10762:
        return "Kids";
      case 10763:
        return "News";
      case 10764:
        return "Reality";
      case 10765:
        return "Sci-Fi&Fantasy";
      default:
        break;
    }
  }
  render() {
    const genrelist = this.props.genres.map((el) => this.genreList(el));
    return (
      <section
        className="movie"
        onClick={() =>
          this.props.updateState({
            title: this.props.title,
            overview: this.props.overview,
            vote_average: this.props.vote_average,
            poster_path: this.props.poster_path,
            release_date: this.props.release_date,
            genre: genrelist.toString(),
          })
        }
      >
        <img
          className="poster"
          src={this.props.poster_path}
          alt={this.props.alt}
        />
        <p className="title">
          <b>{this.props.title}</b>
        </p>
        <p className="genres">{genrelist.toString()}</p>
        <p className="release">{this.props.release_date}</p>
      </section>
    );
  }
}
