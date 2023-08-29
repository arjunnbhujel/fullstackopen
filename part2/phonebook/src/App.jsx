import { useState } from "react";

const Person = ({ persons }) => (
	<li key={persons.name}>
		{persons.name} ---- {persons.number}
	</li>
);

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "9842516584" },
		{ name: "Robert Openheimer", number: "9845874579" },
		{ name: "Jack Richer", number: "9841575895" },
		{ name: "Rabi Shanker", number: "9848451204" },
	]);

	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [filter, setFilter] = useState("");

	const handleFilter = (event) => {
		setFilter(event.target.value);
	};

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
			<div>
				Filter Shown with :
				<input value={filter} onChange={handleFilter} />
			</div>
			<h2>Add New</h2>
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
				{persons
					.filter((value) => {
						if (filter === "") {
							return value;
						} else if (
							value.name
								.toLowerCase()
								.includes(filter.toLowerCase())
						) {
							return value;
						}
					})
					.map((persons) => (
						<Person key={persons.name} persons={persons} />
					))}
			</ul>
		</div>
	);
};

export default App;
