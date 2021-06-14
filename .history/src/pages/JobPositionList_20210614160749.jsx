import React,{useEffect, useState} from 'react'
import JobPositionService from '../services/jobPositionService';

const [jobPositions, setJobPositions] = useState([])

useEffect(()=>{
    let jobPositionService = new JobPositionService;
    jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));
},[]);

export default function JobPositionList() {
    return (
        <div>
            
        </div>
    )
}
