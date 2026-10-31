import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type MainLayoutProps = {
    children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
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