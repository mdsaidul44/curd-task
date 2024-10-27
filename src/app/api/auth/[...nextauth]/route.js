import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from "next-auth/next"

const handler = NextAuth({
     
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'Email', type: 'text', required: true },
                password: { label: 'Password', type: 'password', required: true },
            },
            async authorize(credentials) { 
                if (!credentials) {
                    return null;
                }
                return true;
            },
        }),
    ],
});

export { handler as GET, handler as POST };
