import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useAuth } from "../hooks/AuthContext";
import Home from "../screens/Home";
import SignIn from "../screens/SignIn";

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  const { authState } = useAuth();

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {authState?.authenticated ? (
          <Drawer.Screen name="Home" component={Home} />
        ) : (
          <Drawer.Screen
            name="Login"
            component={SignIn}
            options={{
              headerShown: false,
              swipeEnabled: false,
             
            }}
          />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
