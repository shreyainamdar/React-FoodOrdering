import UserClass from "./UserClass";
const About=()=>{
    return(
        <div >
            <h1 className="font-extrabold text-[50px] m-2 p-4">About Page</h1>
            <h3 className=" p-4 font-semibold text-[20px]"> This is About me: </h3>
            <div className="m-4 p-4 bg-gray-100 rounded-lg">
            <UserClass />
            </div>
           

        </div>
    )
}

export default About;