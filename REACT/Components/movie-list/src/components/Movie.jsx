export default function Movie(props) {
    return (
        <li>
            <a href={props.url || "#"}>
                <div className="MovieTitle">{props.movie.title}</div>
                <div>Year: {props.movie.year}</div>
                <div>Rating: {props.movie.rating}</div>
            </a>
        </li>
    )
}