import Button from "../components/button";

const Login = () => {
    return (
        <div>
            <Button text = "Click me" myOnClick = {(event) =>  {alert("Hello World");}} />
            <h1> Login page </h1>
        </div>
    );
};

export default Login;