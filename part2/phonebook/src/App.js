import { useState } from "react";

const Person = ({ persons }) => (
	<li key={persons.name}>
		{persons.name} ---- {persons.number}
	</li>
);

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "9842516584" },
	]);

	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const addPerson = (event) => {
		event.preventDefault();
		const nameObject = {
			name: newName,
			number: newNumber,
		};

		if (persons.find((person) => person.name === nameObject.name)) {
			window.alert(`${nameObject.name} is already added to Phonebook`);
		} else {
			setPersons(persons.concat(nameObject));
			setNewName("");
			setNewNumber("");
		}
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};
	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					Name:
					<input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					Number:
					<input value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{persons.map((persons) => (
					<Person key={persons.name} persons={persons} />
				))}
			</ul>
		</div>
	);
};

export default App;
