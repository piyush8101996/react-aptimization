import { memo } from 'react';
import styles from './Label.module.css';

const Label = (props) => {
    console.log('rendering Label Component =====>>>');
    return (
        <div className={styles.container}>
            <p>{props.msg}</p>
            <button onClick={props.resetHandler}>Reset Counter</button>
            <p>Loop count : {props.num}</p>
        </div>
    );
};

export default memo(Label);
