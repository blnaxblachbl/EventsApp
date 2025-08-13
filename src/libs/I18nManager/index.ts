import { I18nManager } from 'react-native';

export function setRTL(state: boolean) {
  I18nManager.allowRTL(state);
  I18nManager.forceRTL(state);
  I18nManager.swapLeftAndRightInRTL(state);
  return I18nManager.isRTL;
}
