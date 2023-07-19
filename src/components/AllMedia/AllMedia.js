import './AllMedia.css';
import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import SingleMedia from '../SingleMedia/SingleMedia';


const AllMedia = () => {
    const [allMedias, SetAllMedias] = useState([]);
    useEffect(() => {
        fetch('https://sm-ph-server.onrender.com/medias')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                SetAllMedias(data);
            })
    }, [])
    // if(allMedias.length===0){
    //     return <Spinner animation='border' variant='danger' />
    // }
    //console.log(allMedias.length);
    return (
        <Container >
            <h2 className='mt-4'>All Media</h2>
            <div className='mb-5'>
                {
                    // eslint-disable-next-line array-callback-return
                    allMedias.map(media => (
                        <SingleMedia key={media._id}
                            media={media}

                        ></SingleMedia>))

                }
            </div>
        </Container>
    );
};

export default AllMedia;