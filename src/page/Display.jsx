import Text from '../component/Text/Text';

const Display = () => {
  const list = [1,2,3,4];
  // const list = ['1','2','3','4'];
  // const list = '';
  const msg = 'Sum of list ';
  // Will throw an error
  const str = 'Hello';

  return (
    <Text 
      list={list}
      msg={msg}/>
  );
};

/**
 * Props are categories into two types
 * 1. Mandatory props - which you need to send / pass the value to render the component
 * 2. Optional props - which is optional in natural 
 * 
 * Default props works on optional props.
 */

export default Display;