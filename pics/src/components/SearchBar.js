import React from 'react';

class SearchBar extends React.Component{

    state = {term: ''};

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    } 
    render(){
        return (<div className="Ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                <label>Image Search</label>
                <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})}></input>
                </div>
                
            </form>
        </div>);
    }
}

export default SearchBar;