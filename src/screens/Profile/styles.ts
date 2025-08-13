import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  contentContainer: {
    alignItems: 'center',
    padding: 12,
  },
  buttonText: {
    color: '#fff',
  },
  text: {
    width: '100%',
    color: '#000',
    fontSize: 16,
    marginBottom: 12
  },
});
