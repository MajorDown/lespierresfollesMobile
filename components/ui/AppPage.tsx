import { SafeAreaView } from "react-native-safe-area-context";
import { PropsWithChildren } from "react";

const AppView = (props: PropsWithChildren) => {
    return <SafeAreaView>{props.children}</SafeAreaView>;
}

export default AppView;