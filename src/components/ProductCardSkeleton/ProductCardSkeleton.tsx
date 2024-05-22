import {Skeleton, Stack} from '@mui/material';

const ProductCardSkeleton = () => {
  return (
    <Stack
      sx={{
        width: 600,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
      }}
    >
      <Stack spacing={1}>
        <Skeleton variant="circular" width={100} height={100} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="text" width={150} height={10} sx={{fontSize: '1rem'}} />
        <Skeleton variant="rectangular" width={60} height={10} />
        <Skeleton variant="rectangular" width={210} height={20} />
        <Skeleton variant="rounded" width={210} height={20} />
      </Stack>
      <Stack spacing={1}>
        <Skeleton variant="rectangular" width={60} height={10} />
        <Skeleton variant="rectangular" width={60} height={10} />
        <Skeleton variant="rounded" width={140} height={20} />
        <Skeleton variant="rounded" width={140} height={20} />
      </Stack>
    </Stack>
  );
};

export default ProductCardSkeleton;
