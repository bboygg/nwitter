import { dbService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import NweetFactory from "components/NweetFactory";

const Home = ({ userObj }) => {
    //console.log(userObj);

    const [nweets, setNweets] = useState([]); // use for read tweet


/******** getNweets will replaced by onSnapshot function to read tweets in real time.
 * The reason why this functio doesn't work in realtime because read data using .get() function.
 * get() fucntion only works when rendering the Page at first moment.
 * 
    const getNweets = async () => {
        const dbNweets = await dbService.collection("nweets").get();
        dbNweets.forEach((document) => {
            const nweetObject = { ...document.data(), id:document.id };
            setNweets((prev) => [nweetObject, ...prev])   
        });
    };
*/

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id:document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        });
    }, []);




    return ( 
        <>
            <NweetFactory userObj={ userObj } />
            <div>
                {nweets.map((nweet) => (
                    <Nweet 
                    key={nweet.id} 
                    nweetObj={nweet} 
                    isOwner={nweet.creatorId === userObj.uid}
                    />
                ))}
            </div>

        </>
    );
};

export default Home;


            