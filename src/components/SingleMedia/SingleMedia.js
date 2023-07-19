import './SingleMedia.css';
import React, { useEffect, useState } from 'react';

const SingleMedia = (props) => {
    const [allReaction, SetAllReaction] = useState(0);
    console.log(props);
    const { _id, status, imgUrl } = props.media;
    useEffect(() => {
        fetch(`https://sm-ph-server.onrender.com/reactions/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                SetAllReaction(data);
            })
    }, [])

    const countReaction = (id) => {
        const data = { id }
        console.log(id);

        fetch('https://sm-ph-server.onrender.com/reactions', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.modifiedCount > 0 || result.upsertedCount > 0) {
                    alert('Reaction Counted Successfully');
                    fetch(`https://sm-ph-server.onrender.com/reactions/${_id}`)
                        .then(res => res.json())
                        .then(data =>
                            SetAllReaction(data)
                        )
                };
            })

    }

    const likeStatus = () => {
        console.log('like button clicked')
        document.getElementById(_id + "like").style.visibility = "hidden";
        document.getElementById(_id + "love").style.visibility = "hidden";
        document.getElementById(_id + "liked").style.visibility = "visible";
        document.getElementById(_id + "loved").style.visibility = "hidden";
        countReaction(_id);
    }
    const loveStatus = () => {
        console.log('love button clicked')
        document.getElementById(_id + "like").style.visibility = "hidden";
        document.getElementById(_id + "love").style.visibility = "hidden";
        document.getElementById(_id + "liked").style.visibility = "hidden";
        document.getElementById(_id + "loved").style.visibility = "visible";
        countReaction(_id);
    }
    return (
        <div className='media-div'>

            <div>

                <img src={imgUrl} alt="" className='w-75 p-5' />
                <p className='p-5' style={{ border: '2px solid black', borderRadius: '5px' }}>{status}</p>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='me-auto'>
                    <h6 >Total Reaction {allReaction}</h6>
                </div>
                <div className='ms-auto'>
                    <button id={_id + 'like'} onClick={likeStatus}><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
                    <button id={_id + 'love'} onClick={loveStatus}><i className="fa fa-heart" aria-hidden="true"></i></button>
                    <button className="liked" id={_id + 'liked'} onClick={likeStatus}><i className="liked-button fa fa-thumbs-up" aria-hidden="true"></i></button>
                    <button className="loved" id={_id + 'loved'}><i className="loved-button fa fa-heart" aria-hidden="true"></i></button>

                </div>
            </div>
        </div>
    );
};

export default SingleMedia;