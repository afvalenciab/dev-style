import { styled } from '@material-ui/core/styles';

export const ListContainer = styled('section')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  columnGap: '1rem',
  rowGap: '2rem',
  width: '100%',
  padding: '1rem 0',
  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});
