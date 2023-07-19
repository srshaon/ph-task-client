import React, { useEffect, useState } from 'react';
import MediaDetails from '../MediaDetails/MediaDetails';
import { Spinner } from 'react-bootstrap';


const Top3Media = () => {
    const [allReactions, SetAllReactions] = useState([]);
    const [allStatus, SetAllStatus] = useState([]);
    const [allimgUrl, SetAllimgURL] = useState([]);
    useEffect(() => {
        fetch('https://sm-ph-server.onrender.com/reactions')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                // data.forEach(element => {
                //     console.log(element.reactions)
                // });
                SetAllReactions(data);
            })
    }, [])
    const [allMedias, SetAllMedias] = useState([]);
    useEffect(() => {
        fetch('https://sm-ph-server.onrender.com/medias')
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                SetAllMedias(data);
            })
    }, [])
    // if (allReactions !== null) {
    //     allReactions.map(element => (
    //         //console.log(element.reactions, element.id)
    //         //console.log('a')
    //     ));
    // }
    const sortedArray = allReactions.sort((a, b) => a.value - b.value);
    const topThreeElements = sortedArray.slice(0, 3);
    //console.log(sortedArray)
    //console.log(topThreeElements);
    let filteredElements = [];
    let b = [];
    topThreeElements.map(element => (
        b = allMedias?.filter(
            (allMedias) => allMedias?._id === element?.id),
        filteredElements.push(b)

    ));
    // useEffect(() => {
    //     fetch("https://jobs4you.onrender.com/applyList")
    //         .then((res) => res.json())
    //         .then((data) => setApplyList(data));
    // }, []);
    // console.log(applyList);
    // const applyCollection = applyList?.filter(
    //     (applies) => applies?.email === user?.email
    // );
    let top3status = []
    filteredElements.forEach((m) => {
        //console.log(m[0].status);
        let abc = m[0].status;
        console.log(abc)
        top3status.push = abc;
    })
    top3status.map((y) => (
        console.log(y)
    ))
    return (
        <div>
            <h6>This is top 3</h6>
            {
                top3status?.map((x) => (
                    <div>
                        {x}
                    </div>
                ))
            }

        </div>

    );
};

export default Top3Media;