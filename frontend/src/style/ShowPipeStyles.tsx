import { makeStyles } from '@material-ui/core';
import { ImportantDevices } from '@mui/icons-material';

import ColorScheme from './ColorScheme';

import InventoryImg from 'img/pipeline-2.jpg';
import DragHandleSVG from 'svgs/solid/bars.svg';

//.MuiIcon-root

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: ColorScheme.secondaryLight,
    textAlign: 'center',
  },
  title: {
    backgroundColor: ColorScheme.primary,
    backgroundImage: `linear-gradient(to right, ${ColorScheme.primaryDark}, ${ColorScheme.primary}, ${ColorScheme.primaryLight})`,

    textAlign: 'center',
    width: '30vw',
    borderRadius: '8px 8px 8px 8px',
    borderWidth: '0 0 3px 0',
    borderStyle: 'solid',
    borderColor: ColorScheme.primaryDark,
    margin: '0 0 1.5vh 2vw',
    paddingTop: '5px',
  },
  titleContent: {
    textAlign: 'center',
    color: ColorScheme.onPrimary,
    fontFamily: 'Bebas Neue',
    fontSize: '5rem',
    letterSpacing: '.5rem',
    wordWrap: 'break-word',
    textShadow: '0 0 black, 0 2px black, 3px 2px black, 0 1px black',
  },
   wrapper: {
    // backgroundColor: ColorScheme.background,
    backgroundImage: `url(${InventoryImg})`,
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',       
    backgroundColor: ColorScheme.background,
    height: '100vh',
    padding: '10px',
  },
  toolbar: {
    backgroundColor: '#ffeff0',
    color: '#fff !important',
    // borderRadius: '15px 15px 0 0',
    // border: '5px 5px 0 5px',
    // borderColor: ColorScheme.background,

    // '& > div > div > div > input': {
    //   '& > div > button':{color: '#fff !important',},
      
    //   backgroundColor: '#fff',

    //   '& < div':{
    //     '&  > svg':{
    //       backgroundColor: '#fff',
    //     },
    //     '&  < div':{
    //       backgroundColor: '#fff !important',
    //     },
    //   },
    // },
  },
  table: {
    // '&.MtableHeader-header-19': {
    //   fontSize: '32px !important',
    //   border: '3px solid black !important',
    // },
    // marginBottom: '1.5vh !important',
  },
  stickyActions: {
    border: '2px solid #000 !important',

    '& table': {
      // tableLayout: 'auto !important',
      emptyCells: 'show !important',
      borderCollapse: 'collapse !important',
      
      // Table Headers
      '& thead': {
        '& th': {
          border: '2px solid #000',
          boxSizing: 'border-box !important',
          verticalAlign: 'middle',
          // width: '20px !important',
          // overflow: 'hidden',
          // marginRight: 'auto' + ' !important',
          // resize: 'horizontal !important',
          // minWidth: '100% !important',
          // paddingLeft: 0,
          // paddingRight: 0 + '!important',
          height: '1px',
          backgroundColor: `${ColorScheme.primaryLight}`,
          color: `${ColorScheme.onPrimary}`,
          fontSize: '125%',
          
          '&:first-child': {
            backgroundColor: `${ColorScheme.primaryDark}`,
            position: 'sticky',
            left: '0',
            zIndex: 999,
          },

          '& > div':{
            display: 'flex',
            flex: '3 !important',
            // width: '100% !important',
            // alignSelf: 'stretch',
            // paddingRight: '50% !important',

            // width: 'maxContent !important',
            // justifyContent: 'flex-start',
            // flexWrap: 'nowrap',
            
            '& > div':{
              '& > span':{
                // Cell Text
                '& > div':{
                  alignContent: 'center !important',
                  textAlign: 'center !important',
                  fontStyle: 'Fenix, serif !important',
                  // fontSize: 'smaller',
                },
                '& > svg':{
                  margin: 0 + ' !important',
                  color: `${ColorScheme.onPrimary} !important`,
                  visibility: 'visible !important',
                  ariaHidden: 'false',
                },
              },
            },
            
            // Drag Handle
            '& > span': {
              // color: 'rgba(0,0,0,0)' + ' !important',
              // backgroundSize: 'contain !important',
              // // backgroundImage: `url(${DragHandleSVG})`,
              // // objectFit: 'cover',
              // // objectPosition: '100% 0',
              // // marginRight: '1px',   
              // // paddingLeft: 'auto',
              // width: '4rem',
              // height: '1rem',     
              // // float: 'right !important',  
              // // alignSelf: 'right !important',  
              // position: 'relative',
              // display: 'block !important',
            },
          },
        },
      },
      
      // Table Rows
      '& tbody': {
        

        '& td': {
          border: '2px solid #000',
          boxSizing: 'border-box !important',
          verticalAlign: 'middle',

          '&:first-child': {
            backgroundColor: `${ColorScheme.secondaryLight}`,
            position: 'sticky',
            left: '0',
            zIndex: 9,
          },
        },
      },

      // Table Footer
      '& tfoot': {
        
      },
    },
  },
}));
export default useStyles;