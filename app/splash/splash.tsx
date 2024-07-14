import { Body2, H1 } from "@/ui/component/Text/Text";
import Flex from "@/ui/component/View/Flex";
import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SplashLogo } from "./styled";

export default function SplashScreen() {

  return (
    <SafeAreaView>
      <Flex>
        <Flex direction="column">
          <SplashLogo />
          <H1>POLE\nDANCE\nMATE</H1>
        </Flex>
        <Flex>
          <Flex>
            <H1>업로드된 회원 사진 중 하나</H1>
          </Flex>
          <Body2>당신의 000자세\n2024년 00월 00일</Body2>
        </Flex>
      </Flex>
    </SafeAreaView>
  )
}