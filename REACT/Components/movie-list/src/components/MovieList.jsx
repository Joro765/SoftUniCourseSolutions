import Movie from "./Movie";


export default function MovieList(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <ul>
                <Movie movie={props.movies[0]} url="https://www.imdb.com/title/tt4919268/" />
                <Movie movie={props.movies[1]} url="https://www.imdb.com/title/tt0133093/" />
                <Movie movie={props.movies[2]} url="https://www.imdb.com/title/tt2911666/" />
            </ul>
        </>
    )
}