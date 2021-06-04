import React from 'react'
import './MainContent.scss'
import upvote from './upload.png'


function MainContent({ title, stories }) {

    const formatDate = (unix_timestamp) => {
        var d=new Date();  // Gets the current time
        var nowTs = Math.floor(d.getTime()/1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
        var seconds = nowTs-unix_timestamp;
    
        // more that two days
        if (seconds > 2*24*3600) {
           return "a few days ago";
        }
        // a day
        if (seconds > 24*3600) {
           return "yesterday";
        }
    
        if (seconds > 3600) {
            return Math.floor(seconds/3600) + " hours ago";
        }
        if (seconds > 1800) {
           return "Half an hour ago";
        }
        if (seconds > 60) {
           return Math.floor(seconds/60) + " minutes ago";
        }
    }

    return (
        <div className="feed">
            <div className="feed__title" id={title}>
                <h2>{title}</h2>
            </div>
            <div className="feed__container">
                {stories.slice(0, 8).map((story) => (
                    <div className="feed__card" id={story.id}>
                        <a href={story.url}>{story.title}</a>
                        <div className="feed__card__image">
                            <img src={story.link}/>
                        </div>
                        <div className="feed__card__details">
                            <div className="upvote">
                                <img src={upvote}/>
                                <span>{story.score}</span>
                            </div>
                            <div>
                                <span>{formatDate(story.time)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainContent