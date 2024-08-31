import sty from './input.module.css'
import React, { Component } from 'react'
import { nanoid } from 'nanoid'
class TypeInp extends Component {
	state = {
		contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
		name: '',
		number: '',
		filter: ""
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
		
		return e.contacts.push(cons)
	}

	renderContacts = (e) => {
		// const inpFind = document.getElementById('inpFind').value
		// 	if (true) {
		// this.setState({ filter: 'awd' })

		// 		return (
		// 			e.map((info) => {
		// 				return (
		// 					<li className={sty.boxMap} key={nanoid()}>
		// 						<p>{info.name}:</p>
		// 						<p>{info.number}</p>
		// 					</li>
		// 				)
		// 			})
		// 		)
				
		// 	} else {
		// this.setState({ filter: 'awd' })

		// 		return (

		// 			console.log(123)
		// 		)
		// 	}
			
		
	}
	render() {
		

		const www = this.state.contacts;
		
		// console.log(www)
		
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
					placeholder='name'
				/>
				<input
				className={sty.inp}
				placeholder='number'
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
				placeholder='find'
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					id="inpFInd"
				/>
				<ul className={sty.list}>
					{
					this.renderContacts(this.state.contacts)}
				</ul>
			</div>
		)
	}
}

export default TypeInp;
