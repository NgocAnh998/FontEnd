import MainLayout from './components/layout/MainLayout'
import HeroBanner from './components/layout/HeroBanner'
import Products from './pages/Products'
import './App.css'

function App() {
    return (
        <MainLayout>
            <HeroBanner />
            <Products />
        </MainLayout>
    )
}

export default App