import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from './context/AuthContext/AuthProvider';
import { createStore } from 'redux';
import CartReducer from './redux/reducers/CartReducer';
import { Provider } from 'react-redux';
import './styles/style.scss';

const store = createStore(CartReducer)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
