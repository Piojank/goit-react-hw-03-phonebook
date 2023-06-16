import { Component } from 'react';
import s from './ContactForm.module.css';

const INITIAL_STATE = {
    name: "",
    number: "",
};

export class ContactForm extends Component {
    state = {
        ...INITIAL_STATE,
    };

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        const { name, number } = this.state;
        
        this.props.onSubmit(name, number);
        this.reset();
    };

    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
                <label className={s.label}>
                    Name
                    <input 
                        className={s.input}
                        type="name" 
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        required
                    />
                </label>
                <label className={s.label}> 
                    Phone number
                    <input 
                        className={s.input}
                        type="phone" 
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        required
                    />
                </label>

                <button type="submit" className={s.btn} disabled={!name || !number}>
                    Add contact
                </button>
            </form>
        );
    };
};