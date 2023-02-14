import { NavLink, Outlet } from 'react-router-dom';

function HelpLayout() {
  return (
    <div className='help-layout'>
      <h2>Webiste Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        distinctio!
      </p>

      <nav>
        <NavLink to='faq'>View the FAQs</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default HelpLayout;
