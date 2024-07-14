import { PoleStar } from "@/src/image";
import MainScreenScrollLayout from "@/ui/component/Layout/MainScreenScrollLayout";
import { Body1, Body2, H1, H3, H4 } from "@/ui/component/Text/Text";
import Flex from "@/ui/component/View/Flex";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import styled from "styled-components/native";

export default function HomeScreen() {

  return (
    <MainScreenScrollLayout>
      <StatusSection />
      <PoleStarStatusSection />
    </MainScreenScrollLayout>
  )
}

// -- SECTION

const StatusSection = () => {
  return (
    <H3>000님 안녕하세요{'\n'}오늘 몸 컨디션은 어떠신가요?</H3>
  )
}

const PoleStarStatusSection = () => {
  return (
    <Card>
      <H3>나는야 귀여운 폴생아</H3>
      <Flex style={{marginTop: 10}}>
        <Flex direction="row" justify="space-between" style={{marginBottom: 10}}>
          <H3>내가 수집한 폴스타</H3>
          <Flex direction="row" align="center">
            <PoleStarImage source={PoleStar} />
            <Body1>X 24</Body1>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <ProgressBar />
        <Flex direction="row" justify="space-between" style={{marginTop: 8}}>
          <Body2>폴생아</Body2>
          <Body2>폴린이</Body2>
        </Flex>
      </Flex>
      <Flex style={{marginTop: 8}}>
        <Flex direction="row" align="center" justify="space-between">
          <Body2><Body2 weight="Bold">별 56개</Body2>만 더 수집하면 다음 레벨이 돼요</Body2>
          <AntDesign name="arrowright" size={28} />
        </Flex>
      </Flex>
    </Card>
  )
}

// -- STYLED COMPONENTS

const Card = styled(Flex)`
  padding: ${({theme}) => theme.size.card.base.padding};
  border-radius: ${({theme}) => theme.size.card.base.borderRadius};
  background-color: ${({theme}) => theme.color.cardBg};
`

const PoleStarImage = styled(Image)`
  width: 24px;
  height: 24px;
`

const ProgressBar = styled.View`
  width: 100%;
  height: 16px;
  background-color: ${({theme}) => theme.color.primary};
  border-radius: 5px;
`