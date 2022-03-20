import { authService, dbService } from "fbase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ( {userObj, refreshUser} ) => {
    const navigate =useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);

    const onLogOutClick = () => {
        authService.signOut();
        navigate("/");
    };

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({ displayName: newDisplayName});
            refreshUser();
        }
    };

    /*
    const getMyNweets = async () => {
        const nweets = await dbService
            .collection("nweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt", "asc") //오름차순 asc <-> desc(내림차순)
            .get(); //get the result of query statements

            console.log(nweets.docs.map((doc) => doc.data()));
        };

    useEffect(() => {
        getMyNweets();
    }, []); 
    //Profile컴포넌트가 렌더링 될 때, 
    //즉, 프로필로 이동했을 때  뭔가 작업들이 진행되어야 하는데, 그 때  useEffect의 두번째 인자에 [] 빈 배열을 전달.
    */
    return (
        <>
            <form onSubmit={onSubmit}>
                <input 
                    onChange={onChange}
                    type="text" 
                    placeholder="Display name" 
                    value={newDisplayName}
                />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
       
    );
};

export default Profile;