import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Quizes from './components/Quizes/Quizes';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main> ,
      children: [
        {
          path: '/',
          element: <Header></Header>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/topics',
          element: <Topics></Topics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/quiz/:quizId', 
          loader: async({params}) => {
            return fetch(` https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quizes></Quizes>
        },
      ]
    },

    {path: '*', element: <div><h2 className='text-center font-bold text-4xl'>404 Link not Found!</h2></div>},
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
