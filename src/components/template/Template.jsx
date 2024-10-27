import { useParams } from "react-router-dom";

export default function Template() {

    const param = useParams();
    return (
        <div>Template {param.id}</div>
    )
}
