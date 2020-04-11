import Form from '../components/Form';
import axios from 'axios';

const Signup = () => {
  async function handleSubmit(e) {
    event.preventDefault();
    const body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    }
    const res = await axios.post('/api/signup',{body})
    console.log('response', res.data)
  }
  return (
    <Form onSubmit={handleSubmit} />
  )
}

export default Signup;
