import { Component } from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview';

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };
  render() {
    console.log(SHOP_DATA);
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollections }) => {
          return <CollectionPreview key={id} {...otherCollections} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
