// data
import { standards } from '../standards';

// components
import { Modal, styled, Button, Typography, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function BgModal({
  open,
  setOpen,
  standard,
  setCurrentStandard,
  currentStandard,
}) {
  const handleClose = () => setOpen(false);

  const BgModal = styled(Modal)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    minWidth: '90vw',
    minHeight: '70vh',
    maxHeight: '70vh',
    maxWidth: '90vw',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing(2),
    backgroundColor: '#cfd8dc',
    borderRadius: '10px',
  }));

  const StyledBox = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${standard.bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '10px',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  }));

  const GradientBox = styled(Box)(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(5, 5, 1, 5),
    borderRadius: '10px',
    width: '100%',

    display: 'flex',
    justifyContent: 'center',

    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,ffffff+100&0+0,1+100 */
    background:
      '-moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,1) 100%)' /* FF3.6-15 */,
    background:
      '-webkit-linear-gradient(left, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 30%,rgba(255,255,255,1) 100%)' /* Chrome10-25,Safari5.1-6 */,
    background:
      'linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 30%,rgba(255,255,255,1) 100%)' /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */,
    filter:
      "progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 )" /* IE6-9 */,
  }));

  return (
    <>
      {open && (
        <div className='modalWrap'>
          <BgModal
            key={standard.id}
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
            disableEnforceFocus
            disableRestoreFocus
            hideBackdrop
            disableAutoFocus>
            <StyledBox>
              <GradientBox>
                <Button
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    cursor: 'pointer',
                    left: '-1rem',
                    top: '-5rem',
                  }}
                  variant='contained'
                  color='secondary'
                  size='large'
                  startIcon={<ArrowBackIcon />}>
                  Close
                </Button>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    width: '100%',
                  }}>
                  <Grid xs={6}></Grid>
                  <Grid xs={1}>
                    <Typography
                      sx={{
                        backgroundColor: standard.color,
                        padding: '1rem',
                        width: '30px',
                        height: '30px',
                        borderRadius: '100px',
                        textAlign: 'center',
                        lineHeight: '1',
                        fontWeight: 600,
                        position: 'relative',
                        top: '0',
                        right: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                      }}
                      id='modal-modal-title'
                      variant='h5'>
                      {standard.id}
                    </Typography>
                  </Grid>
                  <Grid
                    xs={5}
                    sx={{
                      display: 'flex',
                      flexFlow: 'column nowrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end',
                    }}>
                    <div>
                      <Typography
                        id='modal-modal-title'
                        variant='h4'
                        component='h4'>
                        {standard.title}
                      </Typography>
                      <Typography
                        variant='body1'
                        id='modal-modal-description'>
                        {standard.description}
                      </Typography>
                    </div>
                    <div>
                      <img
                        src={standard.icon}
                        style={{
                          width: '100px',
                          height: '100px',
                          borderRadius: '100px',
                        }}
                      />
                    </div>
                  </Grid>
                </Grid>
                <div className='iconsWrap'>
                  {Object.values(standards).map((item) => {
                    return (
                      <img
                        style={{
                          cursor: 'pointer',
                          width: '50px',
                          height: '50px',
                          margin: '10px',
                          borderRadius: '100px',
                          border:
                            item.id === currentStandard.id
                              ? '2px solid #ff5722'
                              : 'none',
                        }}
                        key={item.id}
                        src={item.icon}
                        onClick={() => {
                          setCurrentStandard(item);
                          setOpen(true);
                        }}
                      />
                    );
                  })}
                </div>
              </GradientBox>
            </StyledBox>
          </BgModal>
        </div>
      )}
    </>
  );
}
