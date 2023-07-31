const LogIn: React.FC = () => {
  return (
    <form>
      <label htmlFor="username">username</label>
      <input type="text" id="username" required></input>
      <label htmlFor="password">password</label>
      <input type="password" id="password" required></input>
    </form>
  );
};

export default LogIn;