import React from 'react';
import Card from './Card';

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image4.jpg';



function ProfileCards() {
    const profiles = [
        {
            image: image1, // Replace with your image URLs
            name: 'Dev  President',
            description: 'Hello, I am a software engineer with over 5 years of experience in web development...',
            socials: [
                { id: 'github', link: '#', viewBox: '0 0 16 16', path: 'M8 0C3.58 0 0 3.58 0 8...' },
                // Add other social links here
            ],
        },
        {
            image: image2, // Replace with your image URLs
            name: 'Afshan  Vice_President',
            description: 'Frontend Developer with a passion for design and aesthetics...',
            socials: [
                { id: 'linkedin', link: '#', viewBox: '', path: 'M1.47 0H0v16h1.47z...' },
                // Add other social links here
            ],
        },
        {
            image: image3, // Replace with your image URLs
            name: 'Manoj   Tech_Lead',
            description: 'Web Developer focusing on server-side development...',
            socials: [
                { id: 'twitter', link: '#', viewBox: '0 0 16 16', path: 'M5.026 15c6.038 0...' },
                // Add other social links here
            ],
        },
        {
            image: image4, // Replace with your image URLs
            name: 'Noumaan Event_Lead',
            description: 'UI/UX Designer with a focus on user-centered design...',
            socials: [
                { id: 'facebook', link: '#', viewBox: '0 0 16 16', path: 'M16 8.049c0-4.446...' },
                // Add other social links here
            ],
        },
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            {profiles.map((profile, index) => (
                <Card key={index} profile={profile} />
            ))}
        </div>
    );
}

export default ProfileCards;
