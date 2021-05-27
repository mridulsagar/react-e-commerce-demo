import React from 'react'
import './menu-item.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div
            className='background-image'
            style={{
            backgroundImage: `url(${imageUrl}`
        }}/>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <h4 className='subtitle'>SHOP NOW</h4>
        </div>
    </div>
)

export default withRouter(MenuItem)
