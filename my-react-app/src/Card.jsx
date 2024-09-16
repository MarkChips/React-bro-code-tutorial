import profilePic from './assets/react-profile-pic.jpg';

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Mark Chipperfield</h2>
            <p className='card-text'>I am a Full-stack Software Developer and I am currently looking for work</p>
        </div>
    );
}

export default Card;