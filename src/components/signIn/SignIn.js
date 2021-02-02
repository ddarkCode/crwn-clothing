import { Component } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import './SignIn.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='email'
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <FormInput
            type='password'
            name='password'
            label='password'
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
