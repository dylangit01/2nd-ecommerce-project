import React from "react";
// import './directory.styles.scss'
import MenuItem from "../menu-item/menu-item.component";

import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {DirectoryMenuContainer} from "./directory.styles";


const Directory = ({sections})=> (
    <DirectoryMenuContainer>
         {
              sections.map(({id, ...otherSectionProps}) => (
                  <MenuItem key={id} {...otherSectionProps}/> ))
         }
    </DirectoryMenuContainer>
);


// const Directory = ({sections})=> (
//     <div className='directory-menu'>
//         {
//             sections.map(({id, ...otherSectionProps}) => (
//                         <MenuItem key={id} {...otherSectionProps}/> ))
//         }
//     </div>
// );

const mapStateToProps = createStructuredSelector ({
     sections: selectDirectorySections
});

// const mapStateToProps = state => ({
//     sections: state.directory
// });

export default connect(mapStateToProps)(Directory)



// Original codes without redux:
// class Directory extends React.Component{
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             sections: [
//                 {
//                     title: 'hats',
//                     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//                     id: 1,
//                     linkUrl: 'hats'
//                 },
//                 {
//                     title: 'jackets',
//                     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//                     id: 2,
//                     linkUrl: ''
//                 },
//                 {
//                     title: 'sneakers',
//                     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//                     id: 3,
//                     linkUrl: ''
//                 },
//                 {
//                     title: 'womens',
//                     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//                     size: 'large',
//                     id: 4,
//                     linkUrl: ''
//                 },
//                 {
//                     title: 'mens',
//                     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//                     size: 'large',
//                     id: 5,
//                     linkUrl: ''
//                 }
//             ]
//         }
//     }
//
//     render() {
//         return (
//             <div className='directory-menu'>
//                 {
//                     this.state.sections.map(({id, ...otherSectionProps}) => (
//                         <MenuItem key={id} {...otherSectionProps}/>
//                     ))
//                 }
//             </div>
//         )
//     }
// }


