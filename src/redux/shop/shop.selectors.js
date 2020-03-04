import {createSelector} from "reselect";

// since we changed shop items array to an object, we dont need the ID_MAP anymore
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// };

const selectShop = state => state.shop;

export const shopSelectorCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

// export const selectCollection = collectionUrlParam =>
//     createSelector(
//         [shopSelectorCollections],
//         collections => collections.find(
//             collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//             // meaning if collectionUrlParam is "hats", then COLLECTION_ID_MAP[hats] === 1, so === collection.id === 1
//         )
//     );

// since we changed the shop items from array to object, we can change above codes to:
export const selectCollection = collectionUrlParam =>
    createSelector(
        [shopSelectorCollections],
        collections => (collections?  collections[collectionUrlParam] : null)
    );

// since we changed shop items from array to an object, but collection-preview component still using the shop items as an array,
// so we can make a new selector to transfer the object back to an array:
// then we needs to add this selector to CollectionOverview component:
export const selectCollectionsForPreview = createSelector(
    [shopSelectorCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);
