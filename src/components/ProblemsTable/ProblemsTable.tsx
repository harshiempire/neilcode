import {problems} from "../../mockProblems/problems"
import React from "react"
import {BsCheckCircle} from 'react-icons/bs'


type ProblemsTableProps={}


const ProblemsTable:React.FC<ProblemsTableProps> =()=>{
    
    return (
        <tbody className="text-white">
            (problems.map((doc,idx) =>{

            }))
        </tbody>
    )
}