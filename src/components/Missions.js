import React from 'react';
import {useEffect, useState} from "react";
import axios from "axios";

import Launch from "./Launch"
const Missions = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://api.spacexdata.com/v3/launches/').then(({data})=>setPosts(data))
    }, []);
    console.log(posts)
    return (
        <div>
            {posts.map(mission => <Launch key={mission.flight_number} mission={mission} />)}
        </div>
    );
};

export default Missions;