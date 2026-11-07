import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header />
            <main className="main-content">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout