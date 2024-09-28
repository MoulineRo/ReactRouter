import {useNavigate} from "react-router-dom";


const Contact = () => {
    const navigate = useNavigate();

    const redirectAbout = () => {
        navigate('/about');
    }

    return (

        <div>
            <button onClick={redirectAbout}>to about</button>
            <p>Це контактна сторінка</p>
        </div>
    )
}

export default Contact