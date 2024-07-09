import { H1 } from "@/common/component/Text/Text";
import Flex from "@/common/component/View/Flex";
import { Auth } from "@/feature/auth";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Flex>
        <H1>로그인 페이지</H1>
        <Button title="구글 로그인" onPress={() => Auth.signInGoogle()} />
      </Flex>
    </SafeAreaView>
  )
}