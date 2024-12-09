import { Article } from "./Article"

export function News({news}) {

    if (!news) return
    if (news.length <= 0) return 'No se encontraron resultados'

    const renderNews = () => {
        news.map((article, index) => {
            return (<Article article={article} key={index}/>)
        }) 
    }

    return renderNews()
}