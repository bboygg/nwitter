import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                    <Route exact path ="/" element = {<Home />}/>
                    <Route exact path ="/profile" element = {<Profile />}/>
                    </>
                ) : (
                    <Route exact path="/" element = {<Auth />}/>
                )}
                {/*<Route exact path="*" element={<Navigate to="/" />} />      
                This redirection event implemented in Profile Page using useNavigate function
                */}
            </Routes>
        </Router>
    );
};

export default AppRouter;