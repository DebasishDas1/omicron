import { useSelector} from 'react-redux';

import Card from '../Reusable/Card';
import styles from './CaseCount.module.css';

const CaseCount = () => {
    const total_case_count = useSelector((state) => state.totalCount.total_case_count);
    const total_death_count = useSelector((state) => state.totalCount.total_death_count);
    const total_recovered_count = useSelector((state) => state.totalCount.total_recovered_count);
    const active_cases = useSelector((state) => state.totalCount.active_cases)

    return (
            <div className={styles.case_contaner}>
                <div className = {styles.total_case_count}> 
                    <Card 
                        title = 'Omicron Case'
                        count = {total_case_count}
                    />
                </div>

                <div className = {styles.total_death_count}>
                    <Card 
                        title = 'Death'
                        count = {total_death_count}
                    />
                </div>

                <div className = {styles.total_recovered_count}>
                    <Card 
                        title = 'Recovered'
                        count = {total_recovered_count}
                    />
                </div>

                <div className = {styles.active_cases}>
                    <Card 
                        title = 'Active Cases'
                        count = {active_cases}
                    />
                </div>

            </div>
    );

};

export default CaseCount;