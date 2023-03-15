import './app-info.css';

const AppInfo = ({totalEmployees, increaseCount}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании LeverX</h1>
            <h2>Общее число сотрудников: {totalEmployees}</h2>
            <h2>Премию получат: {increaseCount}</h2>
        </div>
    )
}

export default AppInfo;