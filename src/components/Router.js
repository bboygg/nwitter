//Router is decide to rendering which components.
import  { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom"; //change HashRouter name as Router by using 'as', it enhance the code readability.
import Auth from "../routes/Auth";
import Home from "../routes/Home";


const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <Route exact path="/" element = {<Home />} />
                       
                ) : (
                    <Route exact path="/" element = {<Auth />} />
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;
