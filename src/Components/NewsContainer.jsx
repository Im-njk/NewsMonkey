import React from 'react'
import NewsCard from './NewsCard'
import axios from "axios";
import noImg from "../noimg.png"
import { useState , useEffect } from 'react';

const NewsContainer = () => {

    var x = [
        "a",
        "asdf",
        "asdf",
        "ad"
    ]
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    const getNews = async () => {
        const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=68c54a9e85904b2183f13e120137dd3e"
        axios.get(url).then((response) => {
            setArticles(response.data.articles);
        });
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <div>
            <div className="row m-5">

                {articles.map((element) => {
                    return <div className="col-md-4 my-3">
                        <NewsCard title={element.title ? element.title : ""} 
                                  description={element.description ? element.description : ""}
                                  url={element.url ? element.url : ""}
                                  urlToImage={element.urlToImage ? element.urlToImage : noImg}
                                  publishedAt={element.publishedAt ? element.publishedAt : ""}/>
                    </div>
                })}
            </div>
        </div>
    )
}

export default NewsContainer
