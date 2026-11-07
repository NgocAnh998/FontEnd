import { useState } from 'react'
import MainLayout from './components/layout/MainLayout'
import Products from './pages/Products'
import './App.css'

function App() {
    const [] = useState('')
    return (
        <MainLayout >
            <Products/>
        </MainLayout>
    )
}

export default App