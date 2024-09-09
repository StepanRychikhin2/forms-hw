import sty from './input.module.css'
import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { toBeDisabled } from '@testing-library/jest-dom/matchers'
class TypeInp extends Component {
	state = {
		contacts: [
			// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			
		],
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
	componentDidMount() {
		if (localStorage.getItem('contacts') == null || localStorage.getItem('contacts') == undefined) {
			document.getElementById("list").textContent = "list"
		} else {
			document.getElementById("list").textContent = " "
			let setInStorage = localStorage.getItem('contacts')
		let parseinJson = JSON.parse(setInStorage)
		let awdawd = this.state.contacts.push(...parseinJson)
		// console.log(...parseinJson)
		// console.log(this.state.contacts.push(...parseinJson))
		console.log(this.state.contacts)
		// setInterval(() => alert('tick'), 2000);
		
		this.forceUpdate()
		// setTimeout(this.forceUpdate(), 1000);
		}
		
	}
	// JSON.stringify(this.state.contacts)
	componentDidUpdate() {
		let getLOcalConts = localStorage.getItem('contacts')
		let setItems = JSON.parse(getLOcalConts)
		console.log(this.state.contacts)
		let setLocalContacts = localStorage.setItem(
			'contacts',
			JSON.stringify(this.state.contacts)
		)
		console.log(setItems)
		
	}

	render() {
		
		
		console.log('render')
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

				<ul id='list'>
					{this.state.contacts
						.filter((contact) =>
							contact.name
								.toLowerCase()
								.includes(this.state.filter.toLowerCase())
						)
						.map((contact) => (
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
