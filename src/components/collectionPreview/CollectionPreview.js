import CollectionItem from '../collectionItem/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
  console.log(title, items);
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherItems }) => {
            return <CollectionItem {...otherItems} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
