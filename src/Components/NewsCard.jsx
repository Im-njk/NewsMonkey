import React from 'react'

const NewsCard = (props) => {
    return (
        <div>
            <div className="card" >
                <img className="card-img-top" src={props.urlToImage} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text text-secondary my-3 align">{props.publishedAt}</p>
                        <a href={props.url} className="btn btn-outline-primary">Read more</a>
                    </div>
            </div>
        </div>
    )
}

export default NewsCard
