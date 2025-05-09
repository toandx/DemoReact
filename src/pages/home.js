import Button from "../components/button";

const Home = () => {
    return (
        <div>
            <Button text = "Click me" myOnClick = {(event) =>  {alert("Hello World");}} />
            <h1> Home page </h1>
        </div>
    );
};

export default Home;