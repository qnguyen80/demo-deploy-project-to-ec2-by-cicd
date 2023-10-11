import logo from './logo.png';
import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import S3 from './pages/S3';
import Introduction from './pages/Introduction';
import Detection from './pages/Detection';
import Team from './pages/Team';

export default function App() {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className='container'>
        <header className='header'>
          <div className='logo'>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className='header-title'>AWS Practitioner</div>
          <h5>Team 4</h5>
        </header>
        <section className='content'>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                  <Tab label="Introduction" value="1"></Tab>
                  <Tab label="Team" value="2" />
                  <Tab label="S3" value="3" />
                  <Tab label="IP Detection" value="4" />
                </TabList>
              </Box>
              <TabPanel value="2">
                <Team></Team>
              </TabPanel>
              <TabPanel value="1">
                <Introduction></Introduction>
              </TabPanel>
              <TabPanel value="3">
                <S3></S3>
              </TabPanel>
              <TabPanel value="4">
                <Detection></Detection>
              </TabPanel>
            </TabContext>
          </Box>
        </section>
      </div>
    </>
  );
}
