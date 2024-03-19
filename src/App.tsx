import { MainPage } from './components/main/main-page';
import { LoginPage } from './components/login/login-page';
import { SignUpPage } from './components/signup/signup-page';
import { PageProps } from './types';

export const App = () => {
  // TODO: implement those functions, think about how to use state to navigate between pages
  const pageProps: PageProps = {
    navigateToMainPage: () => null,
    navigateToSignUpPage: () => null,
    navigateToLoginPage: () => null,
  }

  // TODO: render the correct page according to the state
  if(/* TODO: add relevant condition according to the state */) {
    return (
      <LoginPage {...pageProps}/>
    )
  }
  if(/* TODO: add relevant condition according to the state */) {
    return (
      <SignUpPage {...pageProps}/>
    )
  }
  return (
    <MainPage {...pageProps}/>
  )
};