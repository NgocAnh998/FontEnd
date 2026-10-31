type FavoriteButtonProps = {
    isFavorite: boolean
    onToggle: () => void
}

function FavoriteButton({
                            isFavorite,
                            onToggle
                        }: FavoriteButtonProps) {
    return (
        <button
            type="button"
            className={
                isFavorite
                    ? 'favorite-button active'
                    : 'favorite-button'
            }
            aria-label={
                isFavorite
                    ? 'Bỏ khỏi yêu thích'
                    : 'Thêm vào yêu thích'
            }
            aria-pressed={isFavorite}
            onClick={onToggle}
        >
            {isFavorite ? '♥' : '♡'}
        </button>
    )
}

export default FavoriteButton