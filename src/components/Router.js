//Router is decide to rendering which components.
import { HashRouter as Router, Route, Routes } from "react-router-dom"; //change HashRouter name as Router by using 'as', it enhance the code readability.
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";


const AppRouter = ({isLoggedIn, userObj, refreshUser}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Routes>
                {isLoggedIn ? (
                    <>
                    <Route path="/" element = {<Home userObj={userObj} />}/>
                    <Route path="/profile" element = {<Profile refreshUser={refreshUser} userObj={userObj} />}/>
                    </>
                ) : (
                    <Route path="/" element = {<Auth />} />
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;
