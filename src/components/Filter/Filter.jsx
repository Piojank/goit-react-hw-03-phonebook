import s from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onFilterChange }) => {
    return (
        <div className={s.filter}>
            <label className={s.label}>
                <p>Filter contacts</p>
                <input
                    className={s.input}
                    value={value}
                    onChange={e => onFilterChange(e.target.value)}
                    type="name"
                />
            </label>
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};