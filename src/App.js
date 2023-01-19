import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home"
import Book from './pages/Book';
import DownloadPdf from './pages/DownloadPdf';

export default function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/download" element={<DownloadPdf />} />
      </Routes>
    </div>
  );
}

