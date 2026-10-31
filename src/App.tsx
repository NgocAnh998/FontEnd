import { useState } from 'react'
import MainLayout from './components/layout/MainLayout'
import HeroBanner from './components/layout/HeroBanner'
import Products from './pages/Products'
import './App.css'

function App() {
    const [searchText, setSearchText] = useState('')

    return (
        <MainLayout
            searchText={searchText}
            onSearchChange={setSearchText}
        >
            <HeroBanner />
            <Products searchText={searchText} />
        </MainLayout>
    )
}

export default App