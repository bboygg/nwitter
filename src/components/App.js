import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService} from "fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  //console.log(authService.currentUser);
  //setInterval (() => console.log(authService.currentUser), 2000); //파이어베이스에서 로그인 처리 마친 후 데이터를 받아올 때까지 2초 동안 기다리게 함.
  useEffect (() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(false);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      uid: user.uid,
      displayName: user.displayName,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
      {init? (
      <AppRouter 
        refreshUser={refreshUser}
        isLoggedIn={Boolean(userObj)} 
        userObj={userObj}
      />
      ) : (
        "Initializing..."
      )}
    </>
  ); 
};
 
export default App;
