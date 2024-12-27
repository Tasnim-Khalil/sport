import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./components/login/Login";

// مكون Layout لتغليف الصفحات المشتركة
// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
    
      <main >{children}</main>
    </>
  );
}

function App() {
  // الحصول على الوضع اللوني والثيم من useMode
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            {/* صفحة الرئيسية */}
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />

            {/* صفحة تسجيل الدخول */}
            <Route
              path="/login"
              element={  <Login/>}
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
