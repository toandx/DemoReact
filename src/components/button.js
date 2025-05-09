const Button = (props) =>{
  
    return (
        <button style={props.style} className = {props.className} onClick={props.myOnClick}>
            {props.text}
        </button>
    )
}

export default Button;