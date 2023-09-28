import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Signin from "../pages/Signin"
import Home from "../pages/Home"

const Stack = createNativeStackNavigator()

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen
        name="Home"
        component={Home}
      />
    </Stack.Navigator>
  )
}
