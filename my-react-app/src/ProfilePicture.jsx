
function ProfilePicture() {

    const imageUrl = './src/assets/react-profile-pic.jpg';

    const handleClick = (e) => e.target.style.display = 'none';

    return <img src={imageUrl} onClick={(e) => handleClick(e)} />
}

export default ProfilePicture;