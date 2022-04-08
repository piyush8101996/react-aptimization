import PropTypes from 'prop-types';

const Text = (props) => {
    const {list, msg} = props;
    const sum = list.reduce((s,i)=>(s+i),0);
    return (
        <div><h1>{msg} : {sum}</h1></div>
    );
};
/**
 * Props are categories into two types
 * 1. Mandatory props - which you need to send / pass the value to render the component
 * 2. Optional props - which is optional in natural 
 * 
 * Default props works on optional props.
 */


/**
 * You need to list down all the props which is expected in your component with the mapping of
 * data-type
 * 1. List of all props
 * 2. Data type of all props
 * 3. Mandatory / optional props
 */

Text.propTypes = {
    msg: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.number).isRequired
};

/**
 * default props is help to create default value for optional props
 */
Text.defaultProps = {
    msg: 'Sum is'
};

/**
 * It is expected if parent component do not send any mandatory props then component 
 * should break / throw error
 */

export default Text;