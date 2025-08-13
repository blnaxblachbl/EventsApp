import React from 'react';
import { Pressable, RefreshControl, ScrollView } from 'react-native';

import { Text } from '@components/Text';
import { useUser } from '@hooks/useUser/index';
import { styles } from './styles';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@routes/types';
import { Button } from '@components/Button';

const Profile = () => {
  const { user, loading, logOut, getUser } = useUser();
  const navigation = useNavigation<NavigationProps>();

  useFocusEffect(() => {
    getUser();
  });

  return (
    <ScrollView
      refreshControl={<RefreshControl refreshing={loading} />}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {!user && !loading && (
        <Button
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </Button>
      )}
      {!loading && user && (
        <>
          <Text style={styles.text}>ID: {user.id}</Text>
          <Text style={styles.text}>Name: {user.name}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>Phone: {user.phone}</Text>
          <Button onPress={logOut}>
            <Text style={styles.buttonText}>Log out</Text>
          </Button>
        </>
      )}
    </ScrollView>
  );
};

export default Profile;
