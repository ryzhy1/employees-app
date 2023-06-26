import { useState, useEffect } from 'react';

import TableInfo from "../table-info/TableInfo";
import EmployeesList from '../employees-list/EmployeesList';
import SearchPanel from '../search-panel/SearchPanel';
import AppFilter from '../app-filter/AppFilter';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm';

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
	const [term, setTerm] = useState('');
	const [filter, setFilter] = useState('all')

	const deleteItem = (id: number) => {
		setData(data.filter(item => item.id !== id));
	}

	const onToggleProp = (id: number, prop: 'increase' | 'rise') => {
		return setData(data.map(item => {
			if (item.id === id) {
				return {...item, [prop]: !item[prop]}
			}
			return item;
		}))
	}

	const onUpdateTerm = (items: DataItem[], term: string): DataItem[] => {
		if (term.length === 0) {
		  	return items;
		}
	  
		return items.filter((item: DataItem) => {
		  	return item.name.toLowerCase().indexOf(term) > -1
		})
	  }

	const onUpdateSearch = (term: any) => {
		setTerm(term);
	}

	const filterPost = (items: DataItem[], filter: string): DataItem[] => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

	const onFilterSelect = (filter:string) => {
		setFilter(filter)
	}
		
	const employees: number = data.length;
	const increase: number = data.filter((item: any) => item.increase).length;
	const rise: number = data.filter((item: any) => item.rise).length;
	const visibleData = filterPost(onUpdateTerm(data, term), filter);

	useEffect(() => {
		setData(data)
	}, [data])

	return (
		<div className="app">
			<TableInfo
				employeesCount={employees}
				increaseCount={increase}
				riseCount={rise}
			/>
			<div className="search-panel">
				<SearchPanel
					onUpdateSearch={onUpdateSearch}
					/>
				<AppFilter 
					filter={filter}
					onFilterSelect={onFilterSelect}
				/>
			</div>
			<EmployeesList
				data={visibleData}
				onDelete={deleteItem}
				onToggleProp={onToggleProp}
			/>
			<EmployeesAddForm/>
		</div>
	);
}

export default App;