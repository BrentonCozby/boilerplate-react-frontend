import React from 'react'

export default ({
    name,
    imageUrl,
    websiteUrl
}) => {
    return (
        <div className="page-container">
            <h1>{name}</h1>
            <img style={{maxWidth: '400px'}} src={imageUrl} alt={name} />
            <p><a target="_blank" rel="noopener" href={websiteUrl}>website</a></p>
        </div>
    )
}