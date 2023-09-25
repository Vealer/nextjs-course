import { useRouter } from 'next/router'


function ClientProjectsPage(){
    const router = useRouter();

    console.log(router.query)

    function loadProjectHandler(){
        // laod data..
        router.push('/clients/max/projectA')
    }

    return <div>
        <h1>
            The ClientProjectsPage Page
        </h1>
        <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
}

export default ClientProjectsPage