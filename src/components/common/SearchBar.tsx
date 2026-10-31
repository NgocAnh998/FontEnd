type SearchBarProps = {
    value: string
    onChange: (value: string) => void
}

function SearchBar({ value, onChange }: SearchBarProps) {
    return (
        <input
            className="search-input"
            type="search"
            value={value}
            placeholder="Tìm kiếm sản phẩm..."
            aria-label="Tìm kiếm sản phẩm"
            onChange={(event) => onChange(event.target.value)}
        />
    )
}

export default SearchBar