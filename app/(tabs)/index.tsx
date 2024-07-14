import MainScreenScrollLayout from "@/ui/component/Layout/MainScreenScrollLayout";
import { H1, H3 } from "@/ui/component/Text/Text";
import Flex from "@/ui/component/View/Flex";

export default function HomeScreen() {

  return (
    <MainScreenScrollLayout>
      <StatusSection />
      <PoleStarStatusSection />
    </MainScreenScrollLayout>
  )
}

const StatusSection = () => {
  return (
    <H3>000님 안녕하세요{'\n'}오늘 몸 컨디션은 어떠신가요?</H3>
  )
}

const PoleStarStatusSection = () => {
  return (
    <Flex>
      <H3>나는야 귀여운 폴생아</H3>
      <Flex>
        <Flex>
          <H3>내가 수집한 폴스타</H3>
          <Flex direction="row">
            
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}