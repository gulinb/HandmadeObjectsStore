import React from 'react'
import {withRouter} from 'react-router-dom'
import ProductItem from '../../components/product-item/product-item.component';

import './product-category-admin.styles.jsx'
import { CollectionPage, Title, CustomButtonStyle, Items } from './product-category-admin.styles.jsx';

const ProductCategory = ({collection, history, match}) => {
    const {title, elemente, id} = collection
    return(
         <CollectionPage>
         <Title>{title.toUpperCase()}</Title>
         <CustomButtonStyle onClick={() => history.push(`${match.url}/add/${id}`)} inverted>ADAUGA PRODUS</CustomButtonStyle>
             <Items>
                {
                    elemente.map(element => (<ProductItem key={element.name} element={element} collectionId={id} title={title}/>))
                }
             </Items>
          </CollectionPage>
         )
}

export default withRouter(ProductCategory)