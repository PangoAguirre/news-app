/* eslint-disable react/prop-types */
export function Article({article}) {
    return (
        <article>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <img src={article.urlToImage} />
            <a href={article.url} >Saber más</a>
        </article>
    )
}