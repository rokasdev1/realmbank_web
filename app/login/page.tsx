import SignInPage from '@/pages/SignInPage';

type Props = {}

const Login = (props: Props) => {
  return (
   <div>
     <SignInPage
     isRegister={false}
     />
   </div>
  )
}

export default Login