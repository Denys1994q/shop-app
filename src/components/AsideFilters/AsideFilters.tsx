import {List, ListItem} from '@mui/material';
import BasicSlider from '../BasicSlider/BasicSlider';

// це має бути форма, при зміні значень якої, вона наверх передає всі фільтри, які всі і йдуть на бек
const AsideFilters = () => {
  return (
    <List>
      <ListItem>
        <BasicSlider />
      </ListItem>
    </List>
  );
};

export default AsideFilters;
