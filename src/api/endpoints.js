export const getApiNews = ({ word, numPage = 1, numNews = 9, apiKey }) => {
    return `https://newsapi.org/v2/everything?q=${encodeURIComponent(word)}&page=${numPage}&sortBy=popularity&pageSize=${numNews}&apiKey=${apiKey}`;
};
