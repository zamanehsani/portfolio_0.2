import { Link } from "react-router-dom";

export default function Blog(){
    const blogs = ['Blog First', 'Blog Second', 'Blog Third']
    return (
        <div>
            {blogs.map((blog, index) => (
                <Link className="block"  to={`/blog/${index}`} key={index}>{blog}</Link>
            ))}
        </div>
    )
}