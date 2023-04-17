import "./tableInfo.scss";

interface TableInfoProps {
    employeesCount: number;
    increaseCount: number;
    riseCount: number;
}

export default function TableInfo({employeesCount, increaseCount, riseCount}: TableInfoProps): JSX.Element {

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании ITMODevki</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h2>Премию получат: {increaseCount}</h2>
            <h2>Увеличат зарплату: {riseCount}</h2>
        </div>
    )
}