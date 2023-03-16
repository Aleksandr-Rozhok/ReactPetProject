import { Component } from 'react';

import './app-filter.css'

class AppFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            buttonsData: [
                {key: '', label: 'Все сотрудники'},
                {key: 'onIncrease', label: 'На повышение'},
                {key: 'moreThousand', label: 'З/П больше 1000$'}
            ],
            term: ""
        }
    }

    onUpdateFilter = (e) => {
        const term = e.target.getAttribute('name');
        this.setState({term});
        this.props.onUpdateFilters(term);
    }

    createButtons = (btnData) => {
        return btnData.map(({key, label}) => {

            const active = this.state.term === key;
            const clazz = active ? "btn-light" : "btn-outline-light";

            return (
                <button 
                        key={key} 
                        name={key}
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