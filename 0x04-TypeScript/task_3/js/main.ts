// Triple slash directive to include dependencies from crud.d.ts
/// <reference path="crud.d.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Import all functions from crud.js as CRUD
import * as CRUD from 'crud.js';

// Create a row object
const row: RowElement = {
    firstName: "Guillaume",
    lastName: "Salva"
};

// Insert a row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with age set to 23
const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);
