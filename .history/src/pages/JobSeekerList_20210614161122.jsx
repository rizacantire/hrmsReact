import React from 'react'
import JobSeekerService from "../services/jobSeekerService"

export default function JobSeekerList() {

    const [jobSeekers, setJobSeekers] = useState([])

    useEffect(() => {
        let jobSeekerService = new JobSeekerService;
        jobSeekerService.getJobSeekers().then((result)=> setJobSeekers(result.data.data))
    }, [])
    return (
        <div>
            
        </div>
    )
}
