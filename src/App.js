import { ColorModeContext, useMode, } from './theme';
//CssBaseline resets the css to a baseline
// ThemeProvider allows us to pass themes into mui
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices';
import Form from './scenes/form';
<<<<<<< HEAD
import Calendar from './scenes/calendar';
=======
>>>>>>> d44bae6c151402d8bfabb353b0230b7abab109de
// import Bar from './scenes/bar';
// import Line from './scenes/line';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';

function App() {
  const [theme, colorMode] = useMode();

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
<<<<<<< HEAD
            <Route path="/calendar" element={<Calendar />} />
=======
>>>>>>> d44bae6c151402d8bfabb353b0230b7abab109de
            {/* <Route path="/bar" element={<Bar />} /> */}
            {/* <Route path="/line" element={<Line />} /> */}
            {/* <Route path="/pie" element={<Pie />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
            {/* <Route path="/geography" element={<Geography />} /> */}
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
