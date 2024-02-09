import { useParams } from "react-router-dom"

export default function BlogDetails(){
    const params = useParams();
    return(
        <div>
            this is the details of blog {params.id}
        </div>
    )
}