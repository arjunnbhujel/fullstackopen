import React from "react";

const SinglePerson = ({ persons }) => (
	<li key={persons.name}>
		{persons.name} ---- {persons.number}
	</li>
);

const Person = ({ persons, filter }) => {
	return (
		<ul>
			{persons
				.filter((value) => {
					if (filter === "") {
						return value;
					} else if (
						value.name.toLowerCase().includes(filter.toLowerCase())
					) {
						return value;
					}
				})
				.map((persons) => (
					<SinglePerson key={persons.name} persons={persons} />
				))}
		</ul>
	);
};

export default Person;
