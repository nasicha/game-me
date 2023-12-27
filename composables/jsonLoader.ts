import galleryItems from './data/galleryItems';
import characterData from './data/galleryItems';
export default function useJsonLoader() {
  
  let selectedData = galleryItems.gallery;

  return {
    gallery: selectedData
  };
}
