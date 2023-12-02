// pages/_app.js
import { Provider } from 'react-redux';

import RootLayout from '../app/layout';
import Store from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </Provider>
  );
}

export default MyApp;
