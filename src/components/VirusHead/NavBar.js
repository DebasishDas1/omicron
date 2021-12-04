import styles from './NavBar.module.css';
import Popup from '../Reusable/Popup';
import { useSelector, useDispatch } from 'react-redux';
import { pupupActions } from '../../store/popupSlice';

const NavBar = () => {
    const dispatch = useDispatch();

    const about_omicron = useSelector((state) => state.popup.about_omicron);
    const omicron_symptoms = useSelector((state) => state.popup.omicron_symptoms);
    const DNA_structur_of_omicron = useSelector((state) => state.popup.DNA_structur_of_omicron);
    const Recommended_actions = useSelector((state) => state.popup.Recommended_actions);

    return (
        <div className = {styles.navBar}>
            <h1> Omicron related information </h1>

            <button onClick={ () => dispatch( pupupActions.open_about_omicron()) }>About omicron</button>
            {about_omicron && <Popup 
                title = 'About omicron'
                details = 'The B.1.1.529 variant was first reported to WHO from South Africa on 24 November 2021. The epidemiological situation in South Africa has been characterized by three distinct peaks in reported cases, the latest of which was predominantly the Delta variant. In recent weeks, infections have increased steeply, coinciding with the detection of B.1.1.529 variant. The first known confirmed B.1.1.529 infection was from a specimen collected on 9 November 2021.'
            />}

            <button onClick={ () => dispatch( pupupActions.open_omicron_symptoms()) }>Omicron symptoms</button>
            {omicron_symptoms && <Popup 
                title = 'Omicron symptoms'
                details = ''
            />}
            
            <button onClick={ () => dispatch( pupupActions.open_DNA_structur_of_omicron()) }>DNA structur of omicron</button>
            {DNA_structur_of_omicron && <Popup 
                title = 'DNA structur of omicron'
                details = ''
            />}

            <button onClick={ () => dispatch( pupupActions.open_Recommended_actions()) }>Recommended action</button>
            {Recommended_actions && <Popup 
                title = 'Recommended actions'
                details = 'The most effective steps individuals can take to reduce the spread of the COVID-19 virus is to keep a physical distance of at least 1 metre from others; wear a well-fitting mask; open windows to improve ventilation; avoid poorly ventilated or crowded spaces; keep hands clean; cough or sneeze into a bent elbow or tissue; and get vaccinated when it’s their turn.'
            />}
        </div>
    );
};

export default NavBar;