import { Body1, H1 } from '@/ui/component/Text/Text';
import Flex from '@/ui/component/View/Flex';
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Flex style={styles.container}>
        <H1>This screen doesn't exist.</H1>
        <Link href="/" style={styles.link}>
          <Body1>Go to home screen!</Body1>
        </Link>
      </Flex>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
