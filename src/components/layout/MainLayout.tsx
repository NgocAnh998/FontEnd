import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

type MainLayoutProps = {
    children: ReactNode
    searchText: string
    onSearchChange: (value: string) => void
}

function MainLayout({
                        children,
                        searchText,
                        onSearchChange
                    }: MainLayoutProps) {
    return (
        <div>
            <Header
                searchText={searchText}
                onSearchChange={onSearchChange}
            />

            <main className="main-content">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout