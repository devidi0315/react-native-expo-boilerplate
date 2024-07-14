import { Body1, Body2, H1, H2, H3, H4 } from '@/ui/component/Text/Text';
import Flex from '@/ui/component/View/Flex';
import { ScrollView } from 'react-native';
import styled from 'styled-components';

export default function Page() {
  return (
    <ScrollView>
      <Section>
        <H1>H1 입니다</H1>
        <H2>H2 입니다</H2>
        <H3>H3 입니다</H3>
        <H4>H4 입니다</H4>
        <Body1>Body1 입니다</Body1>
        <Body2>Body2 입니다</Body2>
      </Section>
      <Section>
        <H1 weight={500}>weight: 500 H1 입니다</H1>
        <H2 weight={200}>H2 입니다</H2>
        <H3 weight="Medium">Medium H3 입니다</H3>
        <H4 weight="Black">Black: H4 입니다</H4>
        <Body1>Body1 입니다</Body1>
        <Body2>Body2 입니다</Body2>
      </Section>
    </ScrollView>
  );
}

const Section = styled(Flex)`
  padding: 12px;
  border-bottom-width: 1px;
`;
