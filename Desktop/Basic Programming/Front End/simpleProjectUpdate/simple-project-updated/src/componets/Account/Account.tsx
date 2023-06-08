import React from 'react';
import { Link } from 'react-router-dom';

export default function Account(): JSX.Element {
  return (
    <>
      <div>Account</div>
      <p>Это аккаунт пользователя</p>
      <Link to="..">
        Back to user
      </Link>
    </>
  );
}
