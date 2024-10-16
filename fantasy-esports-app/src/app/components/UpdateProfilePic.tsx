function UpdateProfilePic() {
    return (
        <div className="text-center">
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/020/765/399/original/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
                    alt="Profile Picture" style={{width: '100px', height: '100px', borderRadius: '50%'}}/>
                <h2>Update Profile Picture</h2>
                <input type="file" accept="image/*"/>
            </div>

        </div>
    );
}

export default UpdateProfilePic;