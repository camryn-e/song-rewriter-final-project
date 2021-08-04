import React from 'react';

const Home = () => {
    
    return (
        <div>
            <h3>About</h3>
            <p>
                Welcome to the Song Rewriter! 
                This application was inspired by an online trend to rewrite the lyrics of "That Funny Feeling" by Bo Burnham. 
                The song details the sociopolitical problems of today as well as Bo Burnham's own struggle with mental illness during the COVID-19 pandemic.
                Many people resonated with these feelings of hopelessness and existential dread and followed in Bo's footsteps to write their own verses documenting their own experiences.
            </p>
            <iframe width="560" height="315" src={'https://www.youtube.com/embed/WPB6u1BqZqU'} allow='autoplay' title="YouTube video player" frameBorder="1" allowFullScreen autoPlay={true}></iframe>
        </div>
    )
}

export default Home;