import AllGraph from '../Graph/AllGraph';
import CaseCount from './CaseCount';
import BasicTable from './BasicTable';
import virus_img from '../../Assets/virus_img.png'

import styles from './VirusBody.module.css'

const VirusBody = () => {

    return (
        <div className = {styles.main_body}>
            <div className = {styles.titel_contaner}>
                <img src={virus_img} alt={'yo'} />
                <h1> World Omicron Pandemic update </h1> 
            </div>

            Cases
            <div className = {styles.contaner}>
                <CaseCount />
            </div>

            Graph
            <div className = {styles.contaner}>
                <AllGraph />
            </div>

            Reported Omicron cases
            <div className = {styles.contaner}>
                <BasicTable />
            </div>

        </div>
    );
};

export default VirusBody;