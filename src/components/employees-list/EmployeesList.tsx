import EmployeesListItem from "../employees-list-item/Employees-list-item";
import './employees-list.scss';

export default function EmployeesList({data, onDelete, onToggleProp}: any) {
    const elements = data.map((item: any) => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e: any) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })
    
    return (
        <div className="table-list">
            {elements}
        </div>
    )
}