import { useParams } from "react-router-dom";
import Header from "../components/header/header";

export default function SinglePost() {
    const param = useParams();

    return (
        <div className="container">
            <Header />

            <div className="page-title">Single post {param.postId}</div>
        </div>
    )
}


