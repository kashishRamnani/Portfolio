import { useTheme } from "../../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className="flex gap-2">
      {Object.keys(themes).map((key) => (
        <button
          key={key}
          onClick={() => setTheme(key)}
          className={`w-8 h-8 rounded-full border-2 border-gray-300 transition-transform hover:scale-110`}
          style={{ backgroundColor: themes[key].primary }}
          title={themes[key].name}
        >
          {theme === key ? "✓" : ""}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
