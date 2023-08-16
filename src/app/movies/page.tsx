import Link from "next/link";

//type for the query strings
type MovieSearchQuery = {
  sortBy: string;
};

type Movie = {
  name: string;
  rating: number;
};

const movies: Movie[] = [
  { name: "X-men", rating: 5 },
  { name: "A-team", rating: 1 },
  { name: "Solo", rating: 5 },
];

function compare(a: Movie, b: Movie) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export default function MoviePage() {
  return (
    <main>
      <p>Here is a list of the movie monsters fav movies!</p>
      <Link className="block mt-8" href="/movies">
        Remove sort
      </Link>
      <Link className="block" href="/movies?sortBy=asc">
        sort ascending
      </Link>
      <Link className="block mb-8" href="/movies?sortBy=desc">
        sort descending
      </Link>
      <ul>
        {movies.map((movie) => {
          return (
            <li key="movie.name">
              <Link href={`movies/${movie.name.toLowerCase()}`}>{movie.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
