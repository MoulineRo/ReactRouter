import {useNavigate} from "react-router-dom";


const About = () => {
    const navigate = useNavigate();

    const redirectHome = () => {
        navigate('/home');
    }

    return (
        <div>
            <button onClick={redirectHome}>to home</button>
            <p>Це сторінка про нас</p>
        </div>
    )
}

export default About