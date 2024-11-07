import { useChat } from '@/ChatContext';
import './FavoriteMaterials.style.scss';

export const FavoriteMaterials = () => {
  const { favorites, removeFromFavorites } = useChat();

  return (
    <div className="favorite-materials">
      <h2>Избранные материалы</h2>
      {favorites.map(fav => (
        <div key={fav.id} className="favorite-item">
          <span>{fav.text}</span>
          <button onClick={() => removeFromFavorites(fav.id)}>Удалить из избранного</button>
        </div>
      ))}
    </div>
  )
}