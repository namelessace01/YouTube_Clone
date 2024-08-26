// eslint-disable-next-line no-unused-vars
import React from "react";
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'


const Feed = () => {
    return (
        <div className="feed">
            <div className="cards">
                <img src={thumbnail1} alt="" />
                <h2>Channel RoadMap To Become A Web Developer</h2>
                <h3>Great Stack</h3>
                <p>150k views &bull; 2 days ago </p>
            </div>
            <div className="cards">
                <img src={thumbnail2} alt="" />
                <h2>Channel RoadMap To Become A Web Developer</h2>
                <h3>Great Stack</h3>
                <p>150k views &bull; 2 days ago </p>
            </div>
            <div className="cards">
                <img src={thumbnail3} alt="" />
                <h2>Channel RoadMap To Become A Web Developer</h2>
                <h3>Great Stack</h3>
                <p>150k views &bull; 2 days ago </p>
            </div>
            <div className="cards">
                <img src={thumbnail4} alt="" />
                <h2>Channel RoadMap To Become A Web Developer</h2>
                <h3>Great Stack</h3>
                <p>150k views &bull; 2 days ago </p>
            </div>
            <div className="cards">
                <img src={thumbnail5} alt="" />
                <h2>Channel RoadMap To Become A Web Developer</h2>
                <h3>Great Stack</h3>
                <p>150k views &bull; 2 days ago </p>
            </div>
            <div className="cards">
                <img src={thumbnail6} alt="" />
                <h2>Channel RoadMap To Become A Web Developer</h2>
                <h3>Great Stack</h3>
                <p>150k views &bull; 2 days ago </p>
            </div>
            <div className="cards">
                <img src={thumbnail7} alt="" />
                <h2>Channel RoadMap To Become A Web Developer</h2>
                <h3>Great Stack</h3>
                <p>150k views &bull; 2 days ago </p>
            </div>
            <div className="cards">
                <img src={thumbnail8} alt="" />
                <h2>Channel RoadMap To Become A Web Developer</h2>
                <h3>Great Stack</h3>
                <p>150k views &bull; 2 days ago </p>
            </div>
        </div>
    )
}

export default Feed