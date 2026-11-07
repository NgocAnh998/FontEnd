
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'

import Products from '../pages/Products'
import { CustomOrder } from '../pages/CustomOrder'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import FAQ from '../pages/FAQ'
import Policy from '../pages/Policy'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/custom-order" element={<CustomOrder />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/policy" element={<Policy />} />

                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
