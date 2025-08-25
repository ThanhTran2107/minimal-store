import { ConfigProvider } from 'antd';
import { useEffect } from 'react';

import { HomePage } from './page/home.page';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  return (
    <ConfigProvider theme={{ hashed: false }}>
      <HomePage />
    </ConfigProvider>
  );
}

export default App;
