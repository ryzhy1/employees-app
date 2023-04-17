import { useState } from 'react';
import * as React from "react";

import TableInfo from "../table-info/TableInfo";
import EmployeesList from '../employees-list/EmployeesList';

import './App.scss';

interface DataItem {
	name: string;
	age: number;
	position: string;
	salary: number;
	increase: boolean;
	rise: boolean;
	id: number;
  }

function App() {
	
	const EmpData: DataItem[] = [
		{name: 'John', age: 20, position: 'Developer', salary: 1000, increase: true, rise: false, id: 1},
		{name: 'Bob', age: 25, position: 'Designer', salary: 1500, increase: false, rise: false, id: 2},
		{name: 'Jill', age: 30, position: 'Manager', salary: 2000, increase: true, rise: true, id: 3},
		{name: 'Bill', age: 35, position: 'CEO', salary: 2500, increase: false, rise: false, id: 4},
	];

	const [data, setData] = useState(EmpData);

	const deleteItem = (id: number) => {
		return setData(data.filter(item => item.id !== id));
	}

	const onToggleProp = (id: number, prop: 'increase' | 'rise'): void => {
		return setData(data.map(item => {
			if (item.id === id) {
				return {...item, [prop]: !item[prop]}
			}
			return item;
		}))
	}
		
	const employees: number = EmpData.length;
	const increase: number = EmpData.filter((item: any) => item.increase).length;
	const rise: number = EmpData.filter((item: any) => item.rise).length;

	return (
		<div className="app">
			<TableInfo
			employeesCount={employees} 
			increaseCount={increase} 
			riseCount={rise} 
			/>
			<EmployeesList 
				data={EmpData}
				onDelete={deleteItem}
				onToggleProp={onToggleProp}
			/>
		</div>
	);
}


export default App;
