import { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@lib/prisma'
import { compare } from 'bcrypt'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials ?? {}
        if (!email || !password) {
          throw new Error('Falta nombre de usuario o contraseña')
        }
        const user = await prisma.user.findUnique({
          where: {
            email
          }
        })
        // if user doesn't exist or password doesn't match
        if (!user || !(await compare(password, user.password))) {
          throw new Error('Usuario o contraseña inválido')
        }
        return {
          id: user.id.toString(),
          email: user.email,
          password: user.password
        }
      }
    })
  ]
}
