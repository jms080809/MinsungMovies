export function RenderMovie({ title, poster_path, release_date }) {
  return (
    <div>
      <h1>{title}</h1>
      <img src={poster_path} />
      <p>{release_date}</p>
    </div>
  );
}
