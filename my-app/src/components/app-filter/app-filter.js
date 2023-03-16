import { Component } from 'react';

import './app-filter.css'

class AppFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonsData: [
                {dataAttribute: '', label: 'Все сотрудники'},
                {dataAttribute: 'onIncrease', label: 'Все сотрудники'},
                {dataAttribute: 'moreThousand', label: 'Все сотрудники'}
            ],
            term: ""
        }
    }

    onUpdateFilter = (e) => {
        const term = e.target.getAttribute('data-filter');
        this.setState({term});
        this.props.onUpdateFilters(term);
    }

    createButtons = (btnData) => {
        return btnData.map(({dataAttribute, label}) => {

            const active = this.state.term === dataAttribute;
            const clazz = active ? "btn-light" : "btn-outline-light";

            return (
                <button 
                        data-filter={dataAttribute} 
                        onClick={this.onUpdateFilter} 
                        className={`btn ${clazz}`} 
                        type="button">
                        {label}
                </button>
                )
        })
    }

    render() {
        const {buttonsData} = this.state
        const allBtns = this.createButtons(buttonsData);

        return (
            <div className="btn-group">
                {allBtns}
            </div>
        );
    }
    
}

export default AppFilter;