import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Toolkit from './components/Toolkit';
import Home from './components/Home';
import About from './components/About';
import ContentPage from './components/ContentPage';
import './App.css';

// Import markdown files (Note: Vite handles this import by providing the path)
import learningPaths from './data/markdown/learning_paths.md?url';
import infrastructureSetup from './data/markdown/infrastructure_setup.md?url';
import securityChecklist from './data/markdown/security_checklist.md?url';


function App() {
  return (
    <Router basename="/g-toolkit/">
      <div className="app-container">
        <Header />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toolkit" element={<Toolkit />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="/learning-paths" 
              element={<ContentPage title="مسارات التعلم المتكاملة" markdownPath={learningPaths} />} 
            />
            <Route 
              path="/infrastructure-setup" 
              element={<ContentPage title="إعداد البنية التحتية الأساسية" markdownPath={infrastructureSetup} />} 
            />
            <Route 
              path="/security-checklist" 
              element={<ContentPage title="قائمة التحقق الأمني الأساسية" markdownPath={securityChecklist} />} 
            />
            {/* Add routes for other main sections here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
