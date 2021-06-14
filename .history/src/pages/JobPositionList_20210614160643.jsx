import React,{useEffect, useState} from 'react'
import JobPositionService from '../services/jobPositionService';

const [jobPositions, setJobPositions] = useState([])

useEffect(()=>{
    let jobPositionService = new JobPositionService;
})

export default function JobPositionList() {
    return (
        <div>
            
        </div>
    )
}
