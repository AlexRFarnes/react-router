import { useLoaderData, Link } from 'react-router-dom';

function Careers() {
  const data = useLoaderData();

  return (
    <div className='careers'>
      {data.map(career => (
        <Link to={`${career.id}`} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

export default Careers;

// loader function
export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers');

  return res.json();
};
