import {Box, Grid} from '@mui/material';

const PhotosGrid = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <img
            src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/smartphone-photography/thumbnail.jpeg"
            alt="Large"
            style={{maxWidth: 570, height: 400, borderRadius: '20px'}}
          />
        </Box>
      </Grid>
      <Grid item xs={6} sx={{textAlign: 'center'}}>
        <img
          src="https://res.cloudinary.com/dw60kllwn/image/upload/v1697355087/zte_front_scqohl.webp"
          alt="Small1"
          style={{maxWidth: 200, height: 200}}
        />
      </Grid>
      <Grid item xs={6} sx={{textAlign: 'center'}}>
        <img
          src="https://res.cloudinary.com/dw60kllwn/image/upload/v1697355342/motorolla_front_yamsvb.webp"
          alt="Small2"
          style={{maxWidth: 200, height: 200}}
        />
      </Grid>
    </Grid>
  );
};

export default PhotosGrid;
