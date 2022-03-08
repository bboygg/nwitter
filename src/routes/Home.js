import { dbService, storageService } from "fbase";
import { useEffect, useState } from "react";
import Nweet from "components/Nweet";
import { v4 as uuidv4 } from "uuid";

const Home = ({ userObj }) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    const [attachment, setAttachment] = useState("");


    // Delete getNweets function to change this function to shows tweets in realtime 
    // const getNweets = async () => {
    //     const dbNweets = await dbService.collection("nweets").get();
    //     dbNweets.forEach((document) => {
    //         const nweetObject = { ...document.data(), id: document.id};
    //         setNweets((prev) => [nweetObject, ...prev])
    //     });
    // };
    // use snapshot function instead of get to make it work in in realtime
    // map function increase code effeciency, because forEach function have to used in each Array elements, 
    // but map function only used one time to return whole array at once.
    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
            const newArray = snapshot.docs.map((document) => ({
                id: document.id,
                ...document.data(),
            }));
            setNweets(newArray);
        });
    }, []);


    const onSubmit = async (event) => {
        event.preventDefault();
        const attachmentRef = storageService
            .ref()
            .child(`${userObj.uid}/${uuidv4()}`);
        const response = await attachmentRef.putString(attachment, "data_url");
        const attachmentUrl = await response.ref.getDownloadURL();
        await dbService.collection("nweets").add({
            text: nweet,
            createdAt: Date.now(),
            cratorId: userObj.uid,
            attachmentUrl,
        });
        setNweet("");
        setAttachment("");
    };

    const onChange = (event) => {
        event.preventDefault();
        const {
            target: { value },
        } = event;
        setNweet(value);
    };

    const onFileChange = (event) => {
        const {
            target: { files },
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setAttachment(result);
            console.log(finishedEvent);
        };
        reader.readAsDataURL(theFile);
        

    };

    const onClearAttachment = () => setAttachment("");


    return (
        <>
        <form onSubmit={onSubmit}>
            <input
            value={nweet}
            onChange={onChange}
            type="text"
            placeholder="What's on your mind?"
            maxLength={120}
            />
            <input
            type="file" 
            accept="image/*"
            onChange={onFileChange} 
            />
            <input 
            type="submit" 
            value="Nweet" 
            />
            {attachment && (
                <div>
                    <img src={attachment} alt="" width="200px" height="100px"/>
                    <button onClick={onClearAttachment}>Clear</button>
                </div>
            )}
        </form>
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