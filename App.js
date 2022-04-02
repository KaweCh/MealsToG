import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantScreen from "./src/features/restaurants/screens/RestaurantScreen";

//StatusBar.currentHeight คือหาช่องว่างบนเมนูด้านบน
export default function App() {
  return (
    <>
      <RestaurantScreen></RestaurantScreen>
      <ExpoStatusBar style="auto"></ExpoStatusBar>
    </>
  );
}
