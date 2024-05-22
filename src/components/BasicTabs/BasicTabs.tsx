import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {useState} from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{pt: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

interface TabContent {
  label: string;
  content: React.ReactNode;
}

interface BasicTabsProps {
  tabs: TabContent[];
}

const BasicTabs = ({tabs}: BasicTabsProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: '100%'}}>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs
          sx={{
            '& .MuiButtonBase-root.MuiTab-root': {
              color: 'black',
              fontWeight: 'bold',
              textTransform: 'capitalize'
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#151515',
              height: '1px'
            }
          }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab, index) => (
            <Tab key={index} sx={{fontSize: 16}} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

export default BasicTabs;
