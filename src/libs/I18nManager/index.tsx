import { navigationRef } from '@routes/RootStack';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Alert, I18nManager } from 'react-native';
import RestartApp from 'react-native-restart';

type ContextData = {
  language: 'en' | 'ar';
  direction: 'ltr' | 'rtl';
  switchLanguage: () => void;
};

const Context = createContext<ContextData>({
  language: I18nManager.isRTL ? 'ar' : 'en',
  direction: I18nManager.isRTL ? 'rtl' : 'ltr',
  switchLanguage: () => {},
});

export function useLanguage() {
  return useContext(Context);
}

export function I18Provider({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<ContextData['language']>(
    I18nManager.isRTL ? 'ar' : 'en',
  );

  function setRTL(state: boolean) {
    I18nManager.allowRTL(state);
    I18nManager.forceRTL(state);
    I18nManager.swapLeftAndRightInRTL(state);
    return I18nManager.isRTL;
  }

  function switchLanguage() {
    const nextLanguage = language === 'en' ? 'ar' : 'en';
    Alert.alert('Language changing', `Change language to ${nextLanguage}?`, [
      {
        text: 'Yes',
        onPress: () => {
          setLanguage(nextLanguage);
          setRTL(nextLanguage === 'ar');
          RestartApp.restart();
        },
      },
      {
        text: 'No',
        style: 'destructive',
      },
    ]);
  }

  return (
    <Context.Provider
      value={{
        language,
        direction: language === 'ar' ? 'rtl' : 'ltr',
        switchLanguage,
      }}
    >
      {children}
    </Context.Provider>
  );
}
