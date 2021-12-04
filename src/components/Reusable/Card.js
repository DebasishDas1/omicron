import styles from './reUuable.module.css';

const Card = (props) => {
    return (
        <div className = {styles.Card_structure} >
            {props.id}
            <div >
                {props.title}
            </div>
            {
                props.description &&
                <div className = {styles.Card_description} >
                    <h3> {props.description} </h3>
                </div>
            }
            <div className = {styles.Card_count} >
                <h1> {props.count} </h1>
            </div>
        </div>
    );
};

export default Card ;