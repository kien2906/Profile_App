import DrawerNavigator from "./src/navigation/Navigation";
import ThemeContext from "./src/Context/ThemeContext";
import FontSizeContext from "./src/Context/FontSizeContext";

export default function App() {
  return (
    <ThemeContext>
      <FontSizeContext>
        <DrawerNavigator />
      </FontSizeContext>
    </ThemeContext>
  );
}
