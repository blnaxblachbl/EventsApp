import React from 'react';
import { TextInput, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Text } from '@components/Text';
import { Button } from '@components/Button';
import { styles } from './styles';
import { FormData } from './types';
import { useMutation } from '@tanstack/react-query';
import { logIn } from '@api/auth';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@routes/types';

const Login = () => {
  const nuvigation = useNavigation<NavigationProps>();

  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: logIn,
    onSuccess: nuvigation.goBack,
    onError: e => console.error(e),
  });

  const { isValid, handleChange, handleSubmit } = useFormik<FormData>({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: Yup.object({
      login: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    validateOnMount: true,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        editable={!isPending}
        onChangeText={text => handleChange('login')(text)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        editable={!isPending}
        onChangeText={text => handleChange('password')(text)}
        onSubmitEditing={handleSubmit}
      />
      <Button disabled={!isValid || isPending} onPress={handleSubmit}>
        <Text style={styles.buttonText}>LogIn</Text>
      </Button>
    </View>
  );
  function onSubmit(data: FormData) {
    mutate(data);
  }
};

export default Login;
