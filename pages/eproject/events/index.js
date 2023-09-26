import { useRouter } from 'next/router'


function ProjectsPage(){
    const router = useRouter();

    console.log(router.query)

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

export default ProjectsPage