import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const redirectContact = () => {
        navigate('/contact');
    }

    return (

        <div>
            <button onClick={redirectContact}>to contact</button>
            <p>Це домашня сторінка</p>
        </div>
    )
}

export default Home