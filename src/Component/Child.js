import { useParams } from "react-router-dom";

const Child = props => {

    const params = useParams();
    console.log(params);
    return <div>
        child
    </div>
}

export default Child;