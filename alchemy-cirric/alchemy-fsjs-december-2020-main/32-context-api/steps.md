# Steps

1. Create context (`const MyContext = createContext(null)`)
2. Create provider (`const MyProvider = ({ children }) => ...`)
3. Create state in provider and expose state via `value` (`<MyContext.Provider value={{}}>`)
4. Create hooks to grab provided values (`const { someState } = useContext(MyContext)`)
5. Wrap some section of your application with provider
6. use hooks to retrieve state
