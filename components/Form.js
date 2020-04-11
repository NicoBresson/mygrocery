const Form = ({ onSubmit}) => {
  return (
    <form onSubmit={onSubmit}>
      <h3>This is the signup form</h3>
      <label>
        <span>Username</span>
        <input type='text' name='username' required />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" required />
      </label>
      <div>
        <button type="submit">Signup</button>
      </div>
    </form>
  )
}

export default Form
