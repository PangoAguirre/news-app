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

---

## **Technical Constraints**

- Use **React with functional components** and **Hooks** (`useState`, `useEffect`, and custom hooks).  
- Fetch data from the [News API](https://newsapi.org/). You will need to create an API key for this.  
- Style the application using plain CSS or a CSS framework of your choice.

---

## **Deliverables**

1. A GitHub repository containing the project.  
2. A README file with:
   - Setup instructions.  
   - Steps to run the application locally.  

---

## **Bonus Features**

1. Implement pagination to navigate through multiple pages of results.  
2. Add a friendly message or indicator when no results are found.  

Good luck, and let us know if you have any questions! 😊
