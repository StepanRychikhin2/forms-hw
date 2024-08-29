import sty from './input.module.css'
import React, { Component } from 'react'
import { nanoid } from 'nanoid'
class TypeInp extends Component {
	state = {
		contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }],
		name: '',
		number: '',
	}

	render() {
		function addContact(e) {
            const inpName = document.getElementById('inpName').value
		const inpPhone = document.getElementById('inpPhone').value
			let cons = {
                "id": nanoid(),
                "name": inpName,
                "number": inpPhone,
            }
			console.log(e)
            // this.setState({name: "awd"})
			return e.contacts.push(cons)
		}

		const www = this.state.contacts;
		
		console.log(www)
		// console.log(inpPhone)
		return (
			<div className={sty.box}>
				<input
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
					required
					id="inpName"
				/>
				<input
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
					required
					id="inpPhone"
				/>

				<button onClick={() => addContact(this.state)}>SEND</button>
				<div>
					{www.map((info) => {
						return (
							<li key={nanoid()}>
								<p>{info.name}</p>
								<p>{info.number}</p>
							</li>
						)
					})}
				</div>
			</div>
		)
	}
}

export default TypeInp
