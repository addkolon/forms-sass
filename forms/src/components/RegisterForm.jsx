export default function RegisterForm() {
  return (
    <>
      <form action="">
          <input type="text" name="username" id="username" placeholder="Create a Username" required />
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
            placeholder="Create a password..."
            required
          />
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm your password..."
            required
          />
          <input type="submit" value="Register" />
        </form>
    </>
  )
}
