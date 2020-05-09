import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function Datepicker({ selectedDate, handleDateChange }) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        // disableToolbar
        variant="outlined"
        format="yyyy/MM/dd"
        margin="none"
        padding="none"
        id="date-picker-inline"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        InputLabelProps={{
          width: 100,
        }}
        InputProps={{
          style: {
            color: " #333",
            width: 225,
            margin: "0px 20px",
          },
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
