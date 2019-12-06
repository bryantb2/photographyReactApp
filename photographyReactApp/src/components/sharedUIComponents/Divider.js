import React from 'react';
import Styles from './Divider.module.css';

function Divider(props) {
    return(
        <div id={"divider" + props.dividerNumber} className={Styles.dividerContainer}>
            <div className={"d-flex justify-content-center " + Styles.dividerHeader}>
                <div className="p-2">{props.header}</div>
            </div>

            <div className={"d-flex justify-content-center " + Styles.dividerSubText}>
                <div className={"p-2 " + Styles.dividerSubText}>{props.subHeader}</div>
            </div>
        </div>
    );
}

export default Divider;