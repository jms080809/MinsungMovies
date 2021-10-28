export function RenderMovie(props) {
  return (
    <div>
      <h1 class="movieTitle">{props.title}</h1>
      <img class="moviePoster" src={props.poster_path} alt="" />
      <p class="movieRelease">{props.release_date}</p>
      <p class="movieOverview">{props.overview}</p>
    </div>
  );
}
