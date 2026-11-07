import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Products from '../pages/Products'
import { CustomOrder } from '../pages/CustomOrder'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<Products />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/custom-order" element={<CustomOrder />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter