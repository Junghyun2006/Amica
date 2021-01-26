import React from 'react';

class DropDownIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const days = () => {
            const arr = [];

            for (let i = 1; i <= 31; i++) {
                arr.push(i.toString());
            }
            return arr;
        };

        const years = () => {
            const arr = [];
            for (let i = 2018; i > 1869; i--) {
                arr.push(i.toString());
            }
            return arr;
        };

        const month = () => {
            const arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            return arr
        };
        

        switch (this.props.type) {
            case "Month":
               return month().map((item,i) => (
                    <div onMouseDown={() => { this.props.onOptionClicked({ month: item }); this.props.setSelected(item) }} className='dd-btn-month' tabIndex={i.toString()} key={`month-${i}`}>
                        {item}
                    </div> 
                ))
            case "Day":
               return days().map((item,i) => (
                    <div onMouseDown={() => { this.props.onOptionClicked({ day: item }); this.props.setSelected(item) }} className='dd-btn-day' tabIndex={i.toString()} key={`days-${i}`}>
                        {item}
                    </div> 
                ))
            case "Year":
               return years().map((item, i) => (
                    <div onMouseDown={() => { this.props.onOptionClicked({ year: item }); this.props.setSelected(item) }} className='dd-btn-year' tabIndex={i.toString()} key={`years-${i}`}>
                        {item}
                    </div>
                ))
            default: 
                return (null);
        }
    };
};

export default DropDownIndex;

