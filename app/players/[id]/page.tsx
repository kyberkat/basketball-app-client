interface Params {
    id: string
}
const Page = ({params}:{params:Params}) => {
    const {id} = params
    return (
        <div>
            {id}
        </div>
    )
}

export default Page