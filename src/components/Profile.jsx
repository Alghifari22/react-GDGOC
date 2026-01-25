import profileImage from '../assets/profile.webp'

function switchButton(){
  document.body.classList.toggle('dark-mode')
}

function Profile() {
  return (
    <div className="card profile-section">
        <div className="profile-header">
          <img src={ profileImage } alt="Avatar" className="avatar" />
          <div>
            <h2 id="name-display">Alghifari Ramadhan</h2>
            <p className="role">Frontend Developer</p>
          </div>
        </div>
        <p className="bio">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          voluptates eius nisi iusto error, quo illo, reprehenderit eum maiores
          facilis perspiciatis porro? Consequatur ad recusandae hic deleniti
          blanditiis quaerat obcaecati.
        </p>

        <button id="switch-mode" className="btn btn-secondary" onClick={switchButton}>
          🌙 Switch Mode
        </button>
    </div>
  )
}

export default Profile
