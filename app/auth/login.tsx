import { Body1, H1 } from "@/ui/component/Text/Text";
import Flex from "@/ui/component/View/Flex";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import { authService } from "@/src/common";


export default function Page() {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Flex>
        <H1>로그인 페이지</H1>
        <Flex>
          <Ionicons.Button name="logo-google" size={24} onPress={() => authService.signInGoogle()}>
            <Body1>구글 로그인</Body1>
          </Ionicons.Button>
          <Ionicons.Button name="logo-apple" size={24} onPress={() => authService.signInGoogle()}>
            <Body1>애플 로그인</Body1>
          </Ionicons.Button>
        </Flex>
      </Flex>
    </SafeAreaView>
  )
}