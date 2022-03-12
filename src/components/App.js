import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService} from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //console.log(authService.currentUser);
  //setInterval (() => console.log(authService.currentUser), 2000); //파이어베이스에서 로그인 처리 마친 후 데이터를 받아올 때까지 2초 동안 기다리게 함.
  useEffect (() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer> 
    </>
  ); 
};
 
export default App;
