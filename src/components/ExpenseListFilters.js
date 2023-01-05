import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export class ExpenseListFilters extends React.Component{

    state = {
        calanderFocused: null,
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calanderFocused) => {
        this.setState(()=> ({ calanderFocused }))
    }
    
    onTextChange = (e)=>{
        this.props.onTextChange(e.target.value)
    }

    onSortChange = (e)=>{
        const select = e.target.value === 'date' ? sortByDate : sortByAmount
        this.props.onSortChange(select)
    }
    render () {
        return (
            <div>
                <input type="text" defaultValue={this.props.filters.text} onChange={this.onTextChange} />
                <select defaultValue={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                startDateId="MyDatePicker"
                startDate={this.props.filters.startDate}
                endDateId="MyDatePicker"
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput= {this.state.calanderFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                />
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSortChange: (select) => dispatch(select()),
        onTextChange: (text)=>dispatch(setTextFilter(text)),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)