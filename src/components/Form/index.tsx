'use client'

import Forget from './forget'
import Login from './login'
import Register from './register'
import Infant from './infant'
import Infante from './infante'

export default function Form({
  type
}: {
  type: 'login' | 'register' | 'infant' | 'forget'
}) {
  return (
    <div>
      {type === 'login' && <Login />}
      {type === 'register' && <Register />}
      {type === 'infant' && <Infante />}
      {type === 'forget' && <Forget />}
    </div>
  )
}
