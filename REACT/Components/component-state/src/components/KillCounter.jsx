export default function KillCounter(props) {
    let text = "KillCounter";


    if (props.count == 1) {
        text = "First Kill!";
    }

    if (props.count == 2) {
        text = "Double Kill!";
    }

    if (props.count == 3) {
        text = "Thriple Kill!";
    }

    if (props.count > 10) {
        text = "Multi Kill!";
    }

    if (props.count > 15) {
        text = "Godlike!";
    }

    return (
        <h2>{text}</h2>
    );
}