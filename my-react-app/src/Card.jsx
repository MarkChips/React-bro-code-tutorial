import profilePic from './assets/react-profile-pic.jpg';

function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="profile picture" />
            <h2>Mark Chipperfield</h2>
            <p>I am a Full-stack Software Developer and I am currently unemployed</p>
        </div>
    );
}

export default Card;