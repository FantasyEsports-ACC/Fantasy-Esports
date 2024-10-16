export default function Profile(){
    const profileData = {
        firstName: "Brad",
        lastName: "Pitt",
        username: "esports123",
        email: "iLoveEsports123@gmail.com"
    };
    //design
    return (
        <>
        <DisplayData data={profileData}/>
        </>
    );
}

function DisplayData(data: any){
    return(
        <>
        <div className="form-group flex flex-col">
            <label>Username</label>
            <input type="text" className="form-control text-black" value={data.data.username}/>
        </div>
        <div className="form-group flex flex-col">
            <label>Email</label>
            <input type="text" className="form-control text-black" value={data.data.email}/>
        </div>
        <div className="form-group flex flex-col">
            <label>First Name</label>
            <input type="text" className="form-control text-black" value={data.data.firstName}/>
        </div>
        <div className="form-group flex flex-col">
            <label>Last Name</label>
            <input type="text" className="form-control text-black" value={data.data.lastName}/>
        </div>
        </>
    );
}
