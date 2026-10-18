function User ({id, name, email, username}) {
    <div style={{ border: `2px solid black` }}>
          <div>{id}</div>
          <div>{name.toUpperCase()}</div>
          <div>{email}</div>
          <div>{username}</div>
        </div>

return (...)
}

export default User