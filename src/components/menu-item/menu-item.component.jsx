import React from "react";
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
        <div className= {`${size} menu-item`}>
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

export default MenuItem
