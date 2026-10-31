import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type MainLayoutProps = {
    children: ReactNode
    searchText: string
    onSearchChange: (value: string) => void
    cartCount: number
}

function MainLayout({
                        children,
                        searchText,
                        onSearchChange,
                        cartCount
                    }: MainLayoutProps) {
    return (
        <div>
            <Header
                searchText={searchText}
                onSearchChange={onSearchChange}
                cartCount={cartCount}
            />

            <main className="main-content">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout