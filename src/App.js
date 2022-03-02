import 'styles/Global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from 'Pages/Blog'
import Resources from 'Pages/Resources'
import ToolBelt from 'Pages/ToolBelt'
import Projects from 'Pages/Projects'
import TopNav from 'Components/TopNav/TopNav'
import QuoteSection from 'Components/QuoteSection/QuoteSection'
import { QueryClient, QueryClientProvider } from 'react-query'
import Homepage from 'Pages/Homepage'
import Footer from 'Components/Footer/Footer'
import CopyRight from 'Components/Copyright/CopyRight'
import ErrorPage from 'Pages/ErrorPage.jsx'
const queryClient = new QueryClient()
function App() {
  return (
    <Router>
      <TopNav />
      <QueryClientProvider client={queryClient}>
        <QuoteSection />
      </QueryClientProvider>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/toolbelt' element={<ToolBelt />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
      <CopyRight />
    </Router>
  )
}

export default App
