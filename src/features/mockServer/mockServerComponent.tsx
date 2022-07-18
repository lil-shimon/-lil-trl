import { useMockServer } from './useMockServer'

export const MockServerComponent = () => {
  const {fetchUser, username, clicked, error, btnText} = useMockServer()
  return (
    <>
      <button onClick={fetchUser} disabled={clicked}>
        {btnText}
      </button>
      {username && <h3>{username}</h3>}
      {error && <p data-testid="error">{error}</p>}
    </>
  )
}
