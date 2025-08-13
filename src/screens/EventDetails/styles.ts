import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
  },
  contentContainer: {
    alignItems: 'center',
    paddingBottom: 50,
  },
  imagesContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
  },
  image: {
    width,
    height: 200,
  },
  infoContainer: {
    width: '100%',
    padding: 12,
  },
  text: {
    textAlign: 'justify',
    color: '#000',
    fontSize: 14,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 12,
  },
  startTime: {
    marginBottom: 12,
    color: '#000',
  },
  bold: {
    fontWeight: 'bold',
  },
});
