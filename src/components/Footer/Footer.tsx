import './Footer.sass';
import Box from '@mui/material/Box';
import InfoSections from '@components/InfoSections/InfoSections';
import TagsList from '@components/TagsList/TagsList';

const Footer = () => {
  return (
    <footer className="footer">
      <Box sx={{mb: 6}}>
        <InfoSections />
      </Box>
      <Box sx={{mb: 6}}>
        <TagsList title="Product tags" labels={['Apples', 'Beans', 'Garlic', 'Tomatoes']} />
      </Box>
      <p>Copyright © 2020 petrbilek.com</p>
    </footer>
  );
};

export default Footer;
