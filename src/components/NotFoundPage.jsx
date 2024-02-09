import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return (
        <div>
            <h1>Nothing is here! </h1>
            <p>Please make a nice and unique page not found page.</p>
            <Link to={'/'}>Take Me To Home</Link>
        </div>
    );
}