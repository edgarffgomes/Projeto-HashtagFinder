import React from 'react';
import './Card.css';

const Card = ({ userImage, user, userName, tweetText, tweetId }) => {
  return (
    <>
      <div className="cardContainer">
        <div className="cardImage">
          <img src={userImage} alt="user" />
          {/*    <img src={img} alt="" /> */}
        </div>
        <div className="cardContent">
          <div className="cardContentTitle">
            <h3>{user}</h3>
            {/*  <h3>UserName</h3> */}
            <a
              href={`https://twitter.com/${userName}`}
              target="_blank"
              rel="noreferrer"
              alt=""
            >
              <p>@{userName}</p>
              {/*  <p>@twitterusername</p> */}
            </a>
          </div>
          <div>
            <p className="tweetText">{tweetText}</p>
            {/*   <p className="tweetText">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat...
            </p> */}
          </div>
          <a
            href={`https://twitter.com/${userName}/status/${tweetId}`}
            target="_blank"
            rel="noreferrer"
            alt=""
          >
            <span>ver mais no twitter</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
