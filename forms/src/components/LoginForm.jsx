export default function LoginForm() {
  return (
    <>
      <form action="">
          <input
            type="email"
            name="e-mail"
            id="e-mail"
            placeholder="Fill in your e-mail..."
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Fill in your password..."
            required
          />
          <input type="submit" value="Log in" />
        </form>
    </>
  )
}
