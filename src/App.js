import MovieCard from "./Moviecard";
import MovieList from "./MovieList";
import Student from "./Student";

function App() {
  return (
    <>
    <h1>MovieFlix</h1>
    {/* <MovieCard/> */}
    <MovieList/>

    {/* This is just for props demo
    <Student name="Prashant" marks="80"/>
    <Student name="Ravi" marks="90"/>
    <Student name="Prateek" marks="95"/>
    <Student/> */}

    </>
    );
}

Student.defaultProps = {
  name : "Student",
  marks : "N.A."
}

export default App;
