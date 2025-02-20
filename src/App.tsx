import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';

import { PAGE } from './constants/page';
import HomePage from './pages/HomePage';
import ApplyFormPage from './pages/ApplyFormPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path={`/${PAGE.APPLY_FORM}`} element={<ApplyFormPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
