import React from 'react';
import styles from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({webformatURL, onClick,tags})=> {
    return (
        <li className={styles.ImageGalleryItem}>
            <img
                src={webformatURL}
                alt={tags}
                className={styles.ImageGalleryItemImage}
                onClick={onClick}    
            />
        </li>
    )
}
export default ImageGalleryItem;