import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { useTheme } from "styled-components/native";

interface MainScreenScrollLayoutProps  extends React.ComponentProps<typeof ScrollViewLayout> {}

const MainScreenScrollLayout = ({children, ...props}: MainScreenScrollLayoutProps) => {

  return (
    <ScrollViewLayout {...props}>
      <SafeAreaView>
        {children}
      </SafeAreaView>
    </ScrollViewLayout>
  )
};

const ScrollViewLayout = styled(ScrollView)`
  flex: 1;
  padding: ${props => props.theme.size.layout.main.padding};  
`

export default MainScreenScrollLayout;