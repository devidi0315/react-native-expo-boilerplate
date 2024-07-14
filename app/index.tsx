import Flex from '@/ui/component/View/Flex';
import { Body1, H1 } from '@/ui/component/Text/Text';
import { router } from 'expo-router';
import { Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <H1>샘플 앱입니다</H1>

      <Flex flex={1}>
        <ScrollView>
          <MenuItem onPress={() => router.push('/_dev/common')} text="Typography" />
          <MenuItem onPress={() => router.push('/auth/login')} text="로그인페이지" />
        </ScrollView>
      </Flex>
    </SafeAreaView>
  );
}

const MenuItem = ({ onPress, text }: { onPress: () => void; text: string }) => {
  return (
    <Pressable onPress={onPress}>
      <Flex style={{ padding: 4, borderBottomWidth: 1 }}>
        <Body1>{text}</Body1>
      </Flex>
    </Pressable>
  );
};
