import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';

import './Authenticate.scss';

const Authenticate = () => {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authenticate;
