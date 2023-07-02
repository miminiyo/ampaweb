import useFetch from '../../../hooks/useFetch'


const Support = () => {

    // Retrieve data
    const enterprises = useFetch("http://localhost:8888/apiampa/wp-json/wp/v2/ventajas")
    // const enterprises = [{
    //     id:2,
    //     title:'lol'
    // },
    // {
    //     id:3,
    //     title:'lillll'
    // }]
console.log(enterprises)
    return(
        enterprises[0]
            .map((enterprise,index) =>
            <p key={index}>
                <span>{enterprise.id}</span>
            </p>
        )

    )

}

export default Support