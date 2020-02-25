import React from "react";
import './menu-item.styles.scss'

import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
        <div
            className= {`${size} menu-item`}
            onClick={()=> history.push(`${match.url}${linkUrl}`)}
        >
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />

            <div className='content'>
                {/*below using 'div',not 'h1' as 'h1' has its own css style*/}
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
);

export default withRouter(MenuItem)
