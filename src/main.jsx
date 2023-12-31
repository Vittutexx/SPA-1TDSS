import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Bloco de rotas
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './router/Home.jsx';
import Produtos from './router/Produtos.jsx';
import EditarProdutos from './router/EditarProdutos.jsx';
import Erro404 from './router/Erro404.jsx';
import ExcluirProdutos from './router/ExcluirProdutos.jsx';
import AdicionarProdutos from './router/AdicionarProdutos.jsx';

//Criando o objeto de rotas
const router = createBrowserRouter([
  { path: '/', element: <App />,
    errorElement: <Erro404 />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/editar/produtos/:id', element: <EditarProdutos /> },
      { path: '/excluir/produtos/:id', element: <ExcluirProdutos /> },
      { path: '/adicionar/produtos', element: <AdicionarProdutos /> },
    ]
  },
])



//Bloco de rotas

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)