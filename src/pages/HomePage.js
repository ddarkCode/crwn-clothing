import './HomePage.scss';
import Directory from '../components/directory/Directory';

const HomePage = (props) => {
  console.log(props);
  return (
    <div className='homepage'>
      <h1>Welcome to my Home page</h1>
      <Directory />
    </div>
  );
};

export default HomePage;
