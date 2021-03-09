import React from 'react'
import {withRouter} from 'react-router-dom'

import {MenuItemContainer, BackgroundImage, ContentStyle, TitleStyle, SubtitleStyle} from './menu-item.styles'

const MenuItem = ({title, imageUrl, history, linkUrl, match}) => (

    <MenuItemContainer
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
            <BackgroundImage
                className='background-image'
                style={{backgroundImage: `url(${imageUrl})`}}
            />
                <ContentStyle className='content'>
                <TitleStyle>{title.toUpperCase()}</TitleStyle>
                    <SubtitleStyle>SHOP NOW</SubtitleStyle>
                </ContentStyle>
    </MenuItemContainer>  
)

export default withRouter(MenuItem)