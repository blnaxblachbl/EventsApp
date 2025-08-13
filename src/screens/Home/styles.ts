import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  emptyContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 12,
    paddingTop: 0,
  },
  search: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 12,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'stretch',
    width: 'auto',
    borderRadius: 2,
  },
  buttonText: {
    color: '#fff',
  },
  count: {
    marginHorizontal: 12,
  },
});
