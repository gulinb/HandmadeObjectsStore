import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import {withRouter} from 'react-router-dom'

import {CollectionPreviewContainer, TitleStyle, Preview} from './collection-preview.styles'

const CollectionPreview = ({title, elemente, history, routeName, match}) => (
    
    <CollectionPreviewContainer>
        <TitleStyle onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()}</TitleStyle>
        <Preview>
            {elemente.filter((element, idx) => idx < 4 ).map(element => (
                <CollectionItem key={element.id} element={element} />
            ))}
        </Preview>
    </CollectionPreviewContainer>
)

export default withRouter(CollectionPreview)