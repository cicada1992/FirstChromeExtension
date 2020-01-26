import React from "react";
import ReactDatePicker from "react-datepicker";
import styled from "styled-components";

import { v3Colors } from "./lib/styleColors";
import { useAppContext } from "./hooks/useAppContext";

const Container = styled.div`
  width: 100%;
  background: white;
  border: 1px solid ${v3Colors.N50};
`;

const ContentContainer = styled.div`
  text-align: left;
  &:after {
    clear: both;
    content: "";
    display: block;
  }
`;

const DatePickerContainer = styled.div`
  width: 100%;
  padding: 18px 16px;
  font-size: 12px;
  .react-datepicker {
    border: 0;
    .react-datepicker__header {
      background: 0;
    }
    .react-datepicker__day {
      width: 27px;
      margin: 3px;
      line-height: 27px;
      &.react-datepicker__day--in-range {
        width: 23px;
        margin: 5px 5px;
        border-radius: 5px;
        line-height: 23px;
        color: ${v3Colors.N300};
        background: ${v3Colors.B5};
        &.react-datepicker__day--range-start,
        &.react-datepicker__day--range-end {
          width: 27px;
          margin: 3px;
          line-height: 27px;
          border-radius: 13px;
          color: ${v3Colors.N0};
          background: ${v3Colors.B100};
        }
      }
      &.react-datepicker__day--outside-month {
        visibility: hidden;
      }
    }
  }
`;

const Calendar: React.FC = () => {
  const {
    start,
    end,
    isFirstSelection,
    setStart,
    setEnd,
    setIsFirstSelection
  } = useAppContext();

  const handleDateChange = (selectedDate: Date) => {
    if (isFirstSelection) {
      setStart(selectedDate);
      setEnd(selectedDate);
    } else {
      if (selectedDate < start) {
        setStart(selectedDate);
        setEnd(start);
      } else {
        setEnd(selectedDate);
      }
    }
    setIsFirstSelection(!isFirstSelection);
  };

  return (
    <Container>
      <ContentContainer>
        <DatePickerContainer>
          <ReactDatePicker
            inline
            allowSameDay
            onChange={handleDateChange}
            openToDate={start}
            selected={start}
            startDate={start}
            endDate={end}
            minDate={new Date()}
            showDisabledMonthNavigation
          />
        </DatePickerContainer>
      </ContentContainer>
    </Container>
  );
};

export default Calendar;
