import sty from './input.module.css'
import React, { Component } from 'react'
import Filter from './Filtyer'
import { nanoid } from 'nanoid'
class TypeInp extends Component {
	state = {
		contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
		name: '',
		number: '',
		filter: '',
	}
	addContact = (e) => {
		const inpName = document.getElementById('inpName').value
		const inpPhone = document.getElementById('inpPhone').value
		let cons = {
			id: nanoid(),
			name: inpName,
			number: inpPhone,
		}
		// console.log(e)
		this.setState({ name: 'awd' })

		return this.state.contacts.push(cons)
	}

	renderContacts = (e) => {
		return e.map((info) => {
			return (
				<li className={sty.boxMap} key={nanoid()}>
					<p>{info.name}:</p>
					<p>{info.number}</p>
				</li>
			)
		})
	}
	handleFilterChange = (e) => {
		this.setState((prevState) => ({
			...prevState,
			filter: e.target.value,
		}))
	}


	render() {
		const { filter, contacts } = this.state
		// console.log(filter)
		// console.log(contacts)
		// console.log(this.state)

		return (
			<div className={sty.box}>
				<div className={sty.boxForm}>
					<input
						className={sty.inp}
						type="text"
						name="name"
						pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						required
						id="inpName"
						placeholder="name"
					/>

					<input
						className={sty.inp}
						placeholder="number"
						type="tel"
						name="number"
						pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
						title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						required
						id="inpPhone"
					/>

					<button onClick={() => this.addContact(this.state)}>SEND</button>
				</div>
				<h1>Contacts</h1>
				<input
					className={sty.inp}
					placeholder="find"
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					id="inpFInd"
					onChange={this.handleFilterChange}
				/>
				{/* <Filter
					changeFilter={(filterVal) =>
						this.setState((prevState) => ({
							filter: filterVal,
							contacts: contacts,
							
						}))
					}
				/> */}
				{/* <TodoList todoList={filter !== '' ? contacts.filter(todo => todo.text.toLowerCase().includes(filter.toLowerCase())) : contacts} deleteTask={(id) => this.setState(prevState => ({ todos: contacts.filter(todo => todo.id !== id), filter: filter }))} completeTask={(id, status) => this.setState(prevState => ({ contacts: contacts.map(todo => todo.id === id ? {
                        id: todo.id,
                        text: todo.text
        
                    } : todo), filter: filter }))} /> */}
				{/* <ul className={sty.list}>{this.renderContacts(this.state.contacts)}</ul> */}
				<ul>
					{this.state.contacts.filter((contact) =>contact.name.toLowerCase().includes(this.state.filter.toLowerCase())).map((contact) => (
						<li key={contact.id}>
							{contact.name}: {contact.number}
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default TypeInp
