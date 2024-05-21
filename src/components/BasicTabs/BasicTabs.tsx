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

interface BasicTabsProps {
  description: string;
}

const BasicTabs = ({description}: BasicTabsProps) => {
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
          <Tab sx={{fontSize: 16}} label="Description" {...a11yProps(0)} />
          <Tab sx={{fontSize: 16}} label="Reviews" {...a11yProps(1)} />
          <Tab sx={{fontSize: 16}} label="Questions" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {description.length > 0
          ? description.map((descriptionItem: any) => {
              return (
                <Box mb={2}>
                  <p style={{fontWeight: 'bold', marginBottom: 8}}>{descriptionItem.label}</p>
                  <p>{descriptionItem.value}</p>
                </Box>
              );
            })
          : 'No description.'}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        No reviews yet.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        No questions yet.
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTabs;
