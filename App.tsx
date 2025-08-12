import { SafeAreaProvider } from 'react-native-safe-area-context';

import QueryProvider from '@libs/QueryProvider';
import RootStack from '@routes/RootStack';

function App() {
  return (
    <QueryProvider>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </QueryProvider>
  );
}

export default App;
