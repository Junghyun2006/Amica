import React from 'react';
import DropDownIndex from './dropdown_index';

class DOBDropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            selected: props.type
        }
        this.dropDownSelected = this.dropDownSelected.bind(this);
        this.setSelected = this.setSelected.bind(this);
    }

    dropDownSelected (e) {
        const state = this.state.clicked
        this.setState({ clicked: !state });
    }

    setSelected(value) {
        this.setState({ selected: [value] })
    }



    
    render() {
        return (
            <div>
                <button 
                    type="button"
                    // onFocus={this.dropDownSelected}
                    onClick={this.dropDownSelected}
                    className={`drop-btn-${this.props.type}`}>
                    {this.state.selected}
                    {this.state.clicked ? 
                        <DropDownIndex 
                            className={`drop-idx-${this.props.type}`} 
                            type={this.props.type}
                            onOptionClicked={this.props.onOptionClicked}
                            setSelected={this.setSelected}
                           />  
                        : null}
                </button>  
            </div>
        )
    }
}

export default DOBDropDown;