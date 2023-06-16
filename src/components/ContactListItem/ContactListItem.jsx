import s from './ContactListItem.module.css';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, id, onDelete }) => {
    return (
        <li className={s.list__item}>
            {`${name}: `}
            <span className={s.list__number}>{number}</span>
            <button 
                className={s.list__btn} 
                id={id}
                onClick={e => onDelete(e.target.id)}
            >
                Delete
            </button>
        </li>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.string,
};