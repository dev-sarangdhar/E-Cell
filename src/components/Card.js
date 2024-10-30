import React from 'react';
import styled from 'styled-components';
import './Card.css';

const Card = ({ profile }) => {
  return (
    <StyledWrapper>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="profile-image">
              <img src={profile.image} alt={`${profile.name}'s profile`} className="profile-img"/>
              <div className="name">{profile.name}</div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="Description">
              <p className="description">{profile.description}</p>
              <div className="socialbar">
                <a id="github" href="#"><svg viewBox="0 0 16 16" className="bi bi-github" fill="currentColor" height={16} width={16}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.65 7.65 0 012.01-.27c.68.003 1.37.09 2.01.27 1.52-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.007 8.007 0 0016 8c0-4.42-3.58-8-8-8z" /></svg></a>
                <a id="instagram" href="#"><svg viewBox="0 0 16 16" className="bi bi-instagram" fill="currentColor" height={16} width={16}><path d="M8 3.162c1.633 0 1.837.006 2.475.036.637.03.957.14 1.18.23a2.25 2.25 0 011.087 1.088c.091.222.2.543.23 1.18.03.638.036.842.036 2.475s-.006 1.837-.036 2.475c-.03.637-.14.957-.23 1.18a2.25 2.25 0 01-1.088 1.087c-.222.091-.543.2-1.18.23-.638.03-.842.036-2.475.036s-1.837-.006-2.475-.036c-.637-.03-.957-.14-1.18-.23a2.25 2.25 0 01-1.087-1.088c-.091-.222-.2-.543-.23-1.18C3.168 9.837 3.162 9.633 3.162 8s.006-1.837.036-2.475c.03-.637.14-.957.23-1.18a2.25 2.25 0 011.088-1.087c.222-.091.543-.2 1.18-.23.638-.03.842-.036 2.475-.036zM8 1.938C6.345 1.938 6.15 1.94 5.506 1.97c-.64.03-1.078.14-1.46.3a4.25 4.25 0 00-1.544.945 4.25 4.25 0 00-.945 1.544c-.16.382-.27.82-.3 1.46-.03.644-.032.839-.032 2.494s.002 1.85.032 2.494c.03.64.14 1.078.3 1.46a4.25 4.25 0 00.945 1.544 4.25 4.25 0 001.544.945c.382.16.82.27 1.46.3.644.03.839.032 2.494.032s1.85-.002 2.494-.032c.64-.03 1.078-.14 1.46-.3a4.25 4.25 0 001.544-.945 4.25 4.25 0 00.945-1.544c.16-.382.27-.82.3-1.46.03-.644.032-.839.032-2.494s-.002-1.85-.032-2.494c-.03-.64-.14-1.078-.3-1.46a4.25 4.25 0 00-.945-1.544 4.25 4.25 0 00-1.544-.945c-.382-.16-.82-.27-1.46-.3-.644-.03-.839-.032-2.494-.032zm0 3.292a4.77 4.77 0 100 9.54 4.77 4.77 0 000-9.54zm0 7.875a3.104 3.104 0 110-6.208 3.104 3.104 0 010 6.208zM11.196 4.204a.77.77 0 110-1.54.77.77 0 010 1.54z" /></svg></a>
                <a id="facebook" href="#"><svg viewBox="0 0 16 16" className="bi bi-facebook" fill="currentColor" height={16} width={16}><path d="M8.049 0C3.604 0 0 3.604 0 8.049c0 4.022 2.948 7.348 6.797 7.931v-5.62H4.899V8.05h1.897V6.275c0-1.867 1.12-2.89 2.827-2.89.8 0 1.632.144 1.632.144v1.792h-.92c-.906 0-1.184.562-1.184 1.136v1.493h2.017l-.323 2.31h-1.694v5.62C13.052 15.397 16 12.07 16 8.049 16 3.604 12.396 0 8.049 0z"/></svg></a>
                <a id="twitter" href="#"><svg viewBox="0 0 16 16" className="bi bi-twitter" fill="currentColor" height={16} width={16}><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.423A6.685 6.685 0 0016 3.542a6.533 6.533 0 01-1.889.518 3.301 3.301 0 001.447-1.817 6.533 6.533 0 01-2.084.797 3.286 3.286 0 00-5.595 2.993 9.325 9.325 0 01-6.767-3.429 3.289 3.289 0 001.018 4.381A3.323 3.323 0 01.64 6.575v.041a3.288 3.288 0 002.633 3.218 3.203 3.203 0 01-.865.115 3.23 3.23 0 01-.614-.059 3.283 3.283 0 003.067 2.277 6.588 6.588 0 01-4.862 1.361 9.29 9.29 0 005.034 1.475"/></svg></a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .flip-card {
    width: 245px;
    height: 270px;
    perspective: 1000px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 5px;
    border-radius: 2em;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: orange;
    border: 4px solid #c143da;
  }

  .profile-image {
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 50%; /* Makes it circular */
    margin-left: auto;
    margin-right: auto;
  }

  .profile-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

 .name {
    position: absolute;
    bottom: 10px; /* Position near the bottom of the card */
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    color: #333333;
    font-weight: bold;
    background-color: transperent; /* Light background for readability */
    padding: 5px 10px;
    border-radius: 5px;
    text-align: center;
    z-index: 20;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); /* Text shadow for visibility */
}



  .flip-card-back {
    background-color: orange;
    border: 4px solid #c143da;
    transform: rotateY(180deg);
    padding: 11px;
  }

  .description {
    margin-top: 10px;
    font-size: 14px;
    letter-spacing: 1px;
    color: white;
  }

.socialbar {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
}

.socialbar a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background-color: #c143da ; /* Matching color with theme */
    color: black;
    border-radius: 50%;
    transition: background-color 0.3s, transform 0.3s;
}

.socialbar a:hover {
    background-color: white;
    color: #c143da; /* Changes color on hover for effect */
    transform: scale(1.1);
}

.socialbar svg {
    width: 16px;
    height: 16px;
}


  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
`;

export default Card;
