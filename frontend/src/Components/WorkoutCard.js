const WorkoutCard = () =>{

    return(
        <div className="flex flex-col w-56 p-4">
            <div className="border border-white rounded p-2 text-center">
                <h1 className="font-bold">OutDoor Run</h1>
                <div className="flex w-3/4 items-center mt-1">
                    <p>calories burned:</p>
                    <p className="ml-1">500</p>
                </div>
                <div className="flex w-3/4 items-center mt-1">
                    <p>Date:</p>
                    <p className="ml-1">26/12/2023</p>
                </div>
                <div className="flex w-3/4 items-center mt-1">
                    <p>Exercise:</p>
                    <p className="ml-1">Padel</p>
                </div>
                <div className="flex w-3/4 items-center mt-1">
                    <p>Distance:</p>
                    <p className="ml-1">2.2k</p>
                </div>
            </div>
        </div>
    )
}
export default WorkoutCard;