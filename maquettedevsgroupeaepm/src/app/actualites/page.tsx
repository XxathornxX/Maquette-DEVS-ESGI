import { stackServerApp } from '@/stack/server';
import { SignUp } from '@stackframe/stack';
import React from 'react'

function actualites() {
      const user = stackServerApp.getUser();
      const app = stackServerApp.urls;

  return (
    <>
      {user ? (
        <h1>Actualités</h1>
      ) : (
        <SignUp />
      )}
    </>
  );
}

export default actualites