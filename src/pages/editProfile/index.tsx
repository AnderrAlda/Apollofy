export const EditProfile = () => {
    return(
        <>
        <div className="bg-black h-screen ">
        <div className="flex flex-col p-5 gap-4 ">
            <h2 className="text-white text-5xl">Edit profile</h2>
            <p className="text-white ">New email</p>
            <input type="text" />
            <p className="text-white ">Gender </p>
            <input type="text" />
            <p className="text-white ">New region or country</p>
            <input type="text" />
            <p className="text-white ">New password</p>
            <input type="text" />
            <p className="text-white">Repite new password</p>
            <input type="text" />
        </div>
        </div>
        </>
    )
}