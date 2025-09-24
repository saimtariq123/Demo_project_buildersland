import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import HomePage from './components/pages/HomePage.jsx/HomePage'
import ServicesPage from './components/pages/Services/Services'
import ContactUs from './components/pages/ContactUs.jsx/ContactUs'
import ProjectsPage from './components/pages/projects/Project'
import NewsAndBlogsPage from './components/pages/New&Blogs/NewsAndBlog'
import AboutUsPage from './components/pages/AboutUs/AboutUsSection'
import SingleServicePage from './components/pages/SingleService/SingleService'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="about" element={<AboutUsPage />} />
        <Route path="blogs" element={<NewsAndBlogsPage />} />
        <Route path="singleService" element={<SingleServicePage />} />
        <Route path="/service/:id" element={<SingleServicePage />} />      </Route>
    </Routes>
  </BrowserRouter>
)
