import { SafeAreaProvider } from 'react-native-safe-area-context';

import QueryProvider from '@libs/QueryProvider';
import RootStack from '@routes/RootStack';
import { I18Provider } from '@libs/I18nManager';

function App() {
  return (
    <I18Provider>
      <QueryProvider>
        <SafeAreaProvider>
          <RootStack />
        </SafeAreaProvider>
      </QueryProvider>
    </I18Provider>
  );
}

export default App;
