import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import {withRouter} from 'react-router-dom'

import {CollectionPreviewContainer, TitleStyle, Preview} from './collection-preview.styles'

const CollectionPreview = ({title, items, history, routeName, match}) => (
    
    <CollectionPreviewContainer>
        <TitleStyle onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</TitleStyle>
        <Preview>
            {items.filter((item, idx) => idx < 4 ).map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </Preview>
    </CollectionPreviewContainer>
)

export default withRouter(CollectionPreview)