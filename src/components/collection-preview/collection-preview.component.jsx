import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import {withRouter} from 'react-router-dom'

import {CollectionPreviewContainer, TitleStyle, Preview} from './collection-preview.styles'

const CollectionPreview = ({title, elemente, history, routeName, match}) => (
    
    <CollectionPreviewContainer>
        <TitleStyle onClick={() => history.push(`${match.url}/${routeName}`)}>{title.toUpperCase()} &#10095;&#10095; </TitleStyle>
        <Preview>
            {elemente.filter((element, idx) => idx < 4 ).map(element => {
                if(element.quantity > 0)
                    return(
                        <CollectionItem key={element.id} element={element} />
                    )
                    return []
                }
            )
            }
        </Preview>
    </CollectionPreviewContainer>
)

export default withRouter(CollectionPreview)