import Topbar from "@/components/Topbar/Topbar"
import Workspace from "@/components/Workspace/Workspace"
import { problems } from "@/utils/problems"
import { Problem } from "@/utils/types/problems"
import React from "react"

type ProblemPageProps = {
    problem:Problem
}

const ProblemPage:React.FC<ProblemPageProps> = ({problem})=>{
    console.log(problem)
    return <>
        <Topbar problemPage/>
        <Workspace problem={problem}/>
    </>
}
export default ProblemPage

// fetch the local data

// ssg - static site generation - prerendered in the server

// getStaticPaths => it creates the dynamic routes

export async function getStaticPaths(){
    const paths = Object.keys(problems).map((key)=>({
        params:{pid:key}
    }))

    return{
        paths,//the above arr
        fallback:false //if the site is not generated it will give the 404
    }
}

//getStaticProps => is used to fetch the data

export async function getStaticProps({params}:{params:{pid:string}}){
    const {pid} = params // params consists of is the objet that we are geting from the index.ts where the => "two-sum":twoSum, is there 
    const problem = problems[pid]

    if(!problem){
        return{
            notFound:true
        }
    }
    problem.handlerFunction = problem.handlerFunction.toString();
    return{
        props:{
            problem
        }
    }
}