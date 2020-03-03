import React from "react";
// import './menu-item.styles.scss'

import {withRouter} from 'react-router-dom'
import {BackgroundImageContainer, ContentContainer, ContentSubtitle, ContentTitle, MenuItemContainer} from "./menu-item.styles";


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer
            className='background-image'
            imageUrl={imageUrl}
        />
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </MenuItemContainer>
);


// const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => (
//         <div
//             className= {`${size} menu-item`}
//             onClick={()=> history.push(`${match.url}${linkUrl}`)}
//         >
//             <div className='background-image'
//                 style={{
//                     backgroundImage: `url(${imageUrl})`
//                 }}
//             />
//
//             <div className='content'>
//                 {/*below using 'div',not 'h1' as 'h1' has its own css style*/}
//                 <div className='title'>{title.toUpperCase()}</div>
//                 <span className='subtitle'>SHOP NOW</span>
//             </div>
//         </div>
// );

export default withRouter(MenuItem)
