import React from 'react';
import { connect } from 'react-redux';
import { addImageAction } from './actions';


const Gallery = ({ photos, addImage }) => {

   const list = photos.map(({ id, name }) => <li key={id}>{name}</li>)
   const add = () => {
      const id = photos[photos.length-1]['id'] + 1;
      const image = {id, name: `image-${id}`};
      addImage(image);
   }

   return (
      <div id="gallery" className="page">
         <div className="page-wrap">
            <h1>Gallery</h1>
            <ul>
               {list}
            </ul>
            <input type="button" onClick={add} value="add image" />
         </div>
      </div>
   )
}

const mapStateToProps = ({gallery: { photos } }) => ({
      photos: photos
});

const mapDispatchToProps = {
   addImage: addImageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);