import "./Button.css";

const Button = (props) => {

    console.log(props)

    return (
        <button onClick = { () => props.handeller(props.k) }>{ props.k }</button>
    );
}

export default Button;