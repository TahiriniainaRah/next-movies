import axios from "axios";
import { server } from "../config/server";
import Hero from "./page/Hero";
import HorrorMovie from "./page/HorrorMovie";
import PopularMovie from "./page/PopularMovie";


export default function Home({ movies }) {
  return (
    <div className="bg-gray-700">
      <Hero />
      <PopularMovie movies={movies.results}/>
      <HorrorMovie movies={movies.results}/>
    </div>
  )
}


export async function getStaticProps() {
  const resp = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = resp.data;

  return {
    props: { movies }
  }
}

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1



