import React from "react";
// import './collection-preview.styles.scss'
import CollectionItem from "../collection-item/collection-item.component";
import {CollectionPreviewContainer, PreviewContainer, TitleContainer} from "./collection-preview.styles";

const CollectionPreview = ({title, items}) => (
    <CollectionPreviewContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <PreviewContainer>
            {
                items.filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
);

// const CollectionPreview = ({title, items}) => (
//     <div className='collection-preview'>
//         <h1 className='title'>{title.toUpperCase()}</h1>
//         <div className='preview'>
//             {
//                 items.filter((item, idx) => idx < 4)
//                     .map(item => (
//                         <CollectionItem key={item.id} item={item} />
//                     ))
//             }
//         </div>
//     </div>
// );

export default CollectionPreview
