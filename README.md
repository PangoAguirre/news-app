# Technical Test: News Search App with React

## **Objective**  
Develop a React application that consumes the [News API](https://newsapi.org/) to allow users to search for news articles, display the results, and refresh the data automatically in real-time.

---

## **Requirements**

1. **News Search**  
   - Provide an input field for users to type a keyword and a button to search for related news articles.

2. **Display Results**  
   - Show a list of news articles with the following details:
     - Title of the article.  
     - A brief description (if available).  
     - A link to the full article.

3. **Real-Time Updates**  
   - Refresh the news list automatically every **30 seconds** to show the most recent data.

4. **State Management**  
   - Use `useState` to manage:
     - The search keyword.  
     - The list of news articles.  
     - A loading state to indicate when articles are being fetched.

5. **Effect Management**  
   - Use `useEffect` to:
     - Fetch news data when the app loads.  
     - Implement the periodic refresh functionality for updating the news.

6. **Custom Hook**  
   - Create a reusable custom hook (`useFetchNews`) to handle API calls and abstract the fetching logic.
