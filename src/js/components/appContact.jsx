import { FormspreeProvider } from '@formspree/react';

function AppContact({ Component, pageProps }) {
  return (
    <FormspreeProvider project="YOUR_PROJECT_ID">
      <Component {...pageProps} />
    </FormspreeProvider>
  );
}
export default AppContact;
