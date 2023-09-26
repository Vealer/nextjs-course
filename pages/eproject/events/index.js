import { useRouter } from 'next/router'




function ProjectPage(){


    const router = useRouter();


    function loadProjectHandler(){
        // load data...
        router.push('/eproject/events/projectA')
    }

    return <div>
        <h1>
            The Projects Page which show all events
        </h1>
        <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
}

export default ProjectPage