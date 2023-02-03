    import React from 'react';

    const Index = () => {
        return (
            <div>
                <div className='footer'>
                    <div>
                        <img className='img' style={{width:"150px" , marginLeft:"150px" }} src={"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"} alt="" />
                        <div className='JointheCommunity'>
                            <h2>Join the Community</h2>
                        </div>
                    </div>
                    <div className='footer__div'>
                        <div style={{marginLeft:"50px"}}>
                            <h3>The Basics</h3>
                            <h5>About TMDB</h5>
                            <h5>Contact Us</h5>
                            <h5>Support Forums</h5>
                            <h5>API</h5>
                            <h5>System Status</h5>
                        </div>
                        <div style={{marginLeft:"50px"}}>
                            <h3>Get Involved</h3>
                            <h5>Contribution Bible</h5>
                            <h5>Add New Movie</h5>
                            <h5>Add New TV Show</h5>
                        </div>
                        <div style={{marginLeft:"50px"}}>
                            <h3>COMMUNITY</h3>
                            <h5>Guidelines</h5>
                            <h5>Discussions</h5>
                            <h5>Leaderboard</h5>
                            <h5>Twitter</h5>
                        </div>
                        <div style={{marginLeft:"50px"}}>
                            <h3>LEGAL</h3>
                            <h5>Terms of Use</h5>
                            <h5>API Terms of Use</h5>
                            <h5>Privacy Policy</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    export default Index;
