export interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

const student1: Student = {
	firstName: 'Favour',
	lastName: 'Uzochukwu',
	age: 18,
	location: 'Ogun'
};

const student2: Student = {
	firstName: 'Adachukwu',
	lastName: 'Uzochukwu',
	age: 19,
	location: 'Ogun'
}

const studentList: Student[] = [student1, student2];

function createAndAppendTable(students: Student[]):  void {
	const table = document.createElement("table");
	const tbody = document.createElement("tbody");

	table.style.width = '100%';
	table.style.borderCollapse = 'collapse';
	table.style.border = '1ps solid black';

	students.forEach(student => {
		const row = document.createElement("tr");

		const firstNameCell = document.createElement("td");
		firstNameCell.textContent = student.firstName;
		firstNameCell.style.border  = '1px solid black';
		firstNameCell.style.padding = '8px';

		const locationCell = document.createElement("td");
		locationCell.textContent = student.location;
		locationCell.style.border = '1px solid black';
		locationCell.style.padding = '8px';

		row.appendChild(firstNameCell);
		row.appendChild(locationCell);
		
		tbody.appendChild(row);
	});

	table.appendChild(tbody);

	if (document.body) {
    document.body.appendChild(table);
  } else {
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(table));
  }
}

createAndAppendTable(studentList);