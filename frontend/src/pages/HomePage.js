import { Link } from "react-router-dom"
import React , {useState} from 'react'
import Header from "../Components/Header"
import WorkoutCard from '../Components/WorkoutCard'

const Homepage = () =>{

    return(
        <div className="h-full flex flex-col items-center justify-between align-baseline">
            <Header />
            <div className="flex flex-row items-baseline justify-between w-3/4 p-2">
                <span>temp</span>
                <h1 className="text-4xl font-bold mt-10">Workouts</h1>
                <button className="p-2 border border-[#00B295] border-2 rounded hover:opacity-70">Add Workout +</button>
            </div>
            <div className=" w-3/4 flex flex-wrap"> 
                <WorkoutCard/>
                <WorkoutCard/>
                <WorkoutCard/>
                <WorkoutCard/>
                <WorkoutCard/>
                <WorkoutCard/>  
            </div>
        </div>
    )

}
export default Homepage