const Contact=()=>{
    return(
        <div className="contact-container">
            <h2 className=" font-bold text-2xl p-4 m-4"> Contact us page</h2>
            <form>
                <input type="text" placeholder="Name" className=" border border-black m-4 p-2"></input>
                <input type="text" placeholder="message" className=" w-80 border border-black m-4 p-2"></input>
                <button className=" bg-gray-100 rounded-lg border border-black m-4 p-2">Submit</button>
            </form>
        </div>
    )
}

export default Contact;