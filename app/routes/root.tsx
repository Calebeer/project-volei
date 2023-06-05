import { Link } from 'react-router-dom';

function MyComponent() {
  function handleClick(event) {
    event.preventDefault(); // impede a navegação padrão do link
    // faça algo ao lidar com o clique no link
  }

  return (
    <Link to="/rota" onClick={handleClick}>
      Meu Link
    </Link>
  );
}
