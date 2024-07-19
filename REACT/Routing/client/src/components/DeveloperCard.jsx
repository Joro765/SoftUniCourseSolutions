import { Link } from "react-router-dom";


export default function DeveloperCard({ props }) {
    return (
        <>
            <div className="developer-container">
                <h3>Name: {props.name}</h3>
                <p>Email: {props.email}</p>
                <p>Role: {props.role}</p>
                <Link to={`/developers/${props._id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </>
    )
}