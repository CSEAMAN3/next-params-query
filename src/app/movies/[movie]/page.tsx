// we are defining a type for the MoviePageParam, as an Object with a property of "movie" that is a sting

type MoviePageParam = {
  movie: string;
};

export default function MoviePage({ params }: { params: MoviePageParam }) {
  console.log(params);
  return <p>This is the individual movie page for {params.movie}</p>;
}
