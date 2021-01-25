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
        const defaultSelected = () => (["Month", "Day", "Year"].includes(this.state.selected)) ? ('default') : (null)

        return (
                <div 
                    // onFocus={this.dropDownSelected}
                    onClick={this.dropDownSelected}
                    className={`drop-btn-${this.props.type} ${defaultSelected()}`}>
                    &nbsp;&nbsp;
                    {this.state.selected} 
                    {this.state.clicked ? 
                        <div className={`dropdown-idx-container-${this.props.type} `}>
                            <DropDownIndex 
                                className={`drop-idx-${this.props.type}`} 
                                type={this.props.type}
                                onOptionClicked={this.props.onOptionClicked}
                                setSelected={this.setSelected}
                                dropDownSelected={this.dropDownSelected}/>  
                        </div> : null}
                </div>  
        )
    }
}

export default DOBDropDown;