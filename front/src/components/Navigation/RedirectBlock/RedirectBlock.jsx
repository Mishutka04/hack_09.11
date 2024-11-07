import './RedirectBlock.style.scss';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const RedirectBlock = ({link, img, text}) => {
  const navigate = useNavigate();

  return (
    <nav className="nav__redirect-block" onClick={() => navigate(link)}>
        <img src={img} alt="img" className='nav__redirect-block__img'/>
        <span className='nav__redirect-block__text'>{text}</span>
    </nav>
  )
}