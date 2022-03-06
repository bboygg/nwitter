import { dbService } from "fbase";

const Nweet = ({ nweetObj, isOwner }) => {
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete tweet?");
        console.log(ok);
        if (ok) {
            console.log(nweetObj.id);
            const data = await dbService.doc(`nweets/${nweetObj.id}`).delete();
            console.log(data);
        }
    }
    return (
        <div>
            <h4>{nweetObj.text}</h4>
            {isOwner && (
                <>
                    <button onClick={onDeleteClick}>Delete Nweet</button>
                    <button>Edit Nweet</button>
                </>
            )}
        </div>
    );
};

export default Nweet;