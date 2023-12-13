import PropTypes from 'prop-types';
import design from '../styles/Test.module.css';

const ExpandButton = ({ collapsed, onClick }) => {

  return (
    <div className={`${design.expandBtn} ${collapsed ? design.collapsed : ''}`} onClick={onClick}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

ExpandButton.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ExpandButton;
