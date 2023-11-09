import css from './Header.module.css';
import {useNavigate} from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <h2>Rick & Morty</h2>
        </div>
    );
};

export {Header};