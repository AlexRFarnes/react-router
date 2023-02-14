import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus,
        sequi!
      </p>
      <p>
        Got to <Link to='/'>Home</Link>.
      </p>
    </div>
  );
}

export default NotFound;
