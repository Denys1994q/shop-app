import {Box, Grid} from '@mui/material';

const PhotosGrid = () => {
  return (
    <Grid container spacing={2}>
      {/* Перший рядок */}
      <Grid item xs={12}>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <img
            src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/smartphone-photography/thumbnail.jpeg"
            alt="Large"
            style={{maxWidth: 570, height: 400, borderRadius: '20px'}}
          />
        </Box>
      </Grid>

      {/* Другий рядок */}
      <Grid item xs={6} sx={{textAlign: 'center'}}>
        <img
          src="https://www.zdnet.com/a/img/resize/e9794c8e2b8a9a9173f0b1f496406d551f6e80b5/2023/08/22/8c939452-01fe-4087-a469-c902c577f0a1/asus-zenfone-10-in-hand.jpg?auto=webp&fit=crop&height=900&width=1200"
          alt="Small1"
          style={{maxWidth: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover'}}
        />
      </Grid>
      <Grid item xs={6} sx={{textAlign: 'center'}}>
        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8fDA%3D"
          alt="Small2"
          style={{maxWidth: '100%', height: '100%', borderRadius: '20px', objectFit: 'cover'}}
        />
      </Grid>
    </Grid>
  );
};

export default PhotosGrid;
