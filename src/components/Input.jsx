import sty from './input.module.css'
import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { toBeDisabled } from '@testing-library/jest-dom/matchers'
import { useState, useEffect } from 'react'
const TypeInp = () => {
	const [contacts, setContacts] = useState([
		// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
		// { id: 'id-2', name: 'Rosie Simpson', number: '459-12-56' },
		// { id: 'id-4', name: 'Rosie Simpson', number: '459-12-56' },
	])
	const [filter, setFilter] = useState("")
	const [upd, setUpd] = useState(0)
	const [upd2, setUpd2] = useState(false)
	const [isMounted, setIsMounted] = useState(false)

	// state = {
	// 	contacts: [
	// 		// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },

	// 	],
	// 	name: '',
	// 	number: '',
	// 	filter: '',
	// }

	const addContact = () => {
		if (upd2 === false) {
			setUpd('r')
			setUpd2(true)
		} else {
			setUpd('rth')
			setUpd2(false)
		}
		console.log(contacts)
		const inpNameElement = document.getElementById('inpName')
		const inpPhoneElement = document.getElementById('inpPhone')

		if (inpNameElement && inpPhoneElement) {
			const inpName = inpNameElement.value
			const inpPhone = inpPhoneElement.value

			let cons = {
				id: nanoid(),
				name: inpName,
				number: inpPhone,
			}

			return contacts.push(cons)
		} else {
			console.log('Input elements not found')
		}
	}

	const renderContacts = (e) => {
		return e.map((info) => {
			return (
				<li className={sty.boxMap} key={nanoid()}>
					<p>{info.name}:</p>
					<p>{info.number}</p>
				</li>
			)
		})
	}
	const handleFilterChange = () => {
		const inpFind = document.getElementById("inpFInd")
		// setFilter(inpFind.value)
		if (inpFind) {
			const inpFindtw = inpFind.value


			
			return setFilter(inpFindtw)
		} else {
			console.log('Input elements not found')
		}
		
	}

	const deleteItem = (e) => {
		console.log(e)
		
	}


	useEffect(() => {
		if (isMounted === false) {
			if (
				localStorage.getItem('contacts') == null ||
				localStorage.getItem('contacts') == undefined
			) {
			} else {
				let setInStorage = localStorage.getItem('contacts')
				let parseinJson = JSON.parse(setInStorage)
				let awdawd = contacts.push(...parseinJson)
				console.log(contacts)
				setUpd('w')
			}
		}
		if (isMounted) {
			console.log('moundet')
			console.log(isMounted)
			let getLOcalConts = localStorage.getItem('contacts')
			let setItems = JSON.parse(getLOcalConts)
			console.log(contacts)
			let setLocalContacts = localStorage.setItem(
				'contacts',
				JSON.stringify(contacts)
			)
			console.log(setItems)
		}
		setIsMounted(true)
		// console.log('useEfeect')
		// console.log(contacts)
	})

	// JSON.stringify(this.state.contacts)
	// componentDidUpdate() {
	// 	let getLOcalConts = localStorage.getItem('contacts')
	// 	let setItems = JSON.parse(getLOcalConts)
	// 	console.log(this.state.contacts)
	// 	let setLocalContacts = localStorage.setItem(
	// 		'contacts',
	// 		JSON.stringify(this.state.contacts)
	// 	)
	// 	console.log(setItems)

	// })
	// componentDidMount() {
	// 	if (localStorage.getItem('contacts') == null || localStorage.getItem('contacts') == undefined) {
	// 		document.getElementById("list").textContent = "list"
	// 	} else {
	// 		document.getElementById("list").textContent = " "
	// 		let setInStorage = localStorage.getItem('contacts')
	// 	let parseinJson = JSON.parse(setInStorage)
	// 	let awdawd = this.state.contacts.push(...parseinJson)
	// 	console.log(this.state.contacts)

	// 	// this.forceUpdate()
	// 	this.setState({ name: 'awd' })
	// 	}

	// }
	// // JSON.stringify(this.state.contacts)
	// componentDidUpdate() {
	// 	let getLOcalConts = localStorage.getItem('contacts')
	// 	let setItems = JSON.parse(getLOcalConts)
	// 	console.log(this.state.contacts)
	// 	let setLocalContacts = localStorage.setItem(
	// 		'contacts',
	// 		JSON.stringify(this.state.contacts)
	// 	)
	// 	console.log(setItems)

	// }

	console.log('render')
	// const { filter, contacts } = this.state
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

				<button onClick={addContact}>SEND</button>
			</div>
			<h1>Contacts</h1>
			<input
				className={sty.inp}
				placeholder="type fho find"
				type="tel"
				name="number"
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
				required
				id="inpFInd"
				// onChange={handleFilterChange()}
			/>
<button onClick={handleFilterChange} id="btnFInd">find</button>
			<ul id="list">
				{contacts
					.filter((contact) =>
						contact.name.toLowerCase().includes(filter.toLowerCase())
					)
					.map((contact) => (
						<li className={sty.item} key={contact.id}>
							<p>{contact.name}: {contact.number}</p>
							<button onClick={(e) => deleteItem(e.target)}>del</button>
						</li>
					))}
			</ul>
		</div>
	)
}

export default TypeInp
