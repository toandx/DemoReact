import Button from "../components/button";
import MyUseState from "../components/myUseState";

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <h1 className="text-primary">Home page</h1>
                    <img src="https://images.unsplash.com/photo-1676472471993-ad0d6897c2a6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hihi" className="rounded" width="80%" height="auto" />
                </div>
                <div className="col-md-4">
                    <Button text = "Click me" className = "btn btn-success" myOnClick = {(event) =>  {alert("Hello World");}} />
                </div>
            </div>
            <MyUseState />
        </div>
    );
};

export default Home;