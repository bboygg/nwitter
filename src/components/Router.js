//Router is decide to rendering which components.
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom"; //change HashRouter name as Router by using 'as', it enhance the code readability.
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";


const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                    <Route path="/" element = {<Home />}/>
                    <Route path="/profile" element = {<Profile />}/>
                    </>
                ) : (
                    <Route path="/" element = {<Auth />} />
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;
