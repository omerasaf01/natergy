import React from 'react'
import Menu from '../menu/menu'
import LoginForm from '../login/loginForm'

export default function Login() {
  return localStorage.getItem("UserAccess") == null ? (
    <>
        <Menu />
        <LoginForm />
    </>
  ) : window.location.replace("/");
}
