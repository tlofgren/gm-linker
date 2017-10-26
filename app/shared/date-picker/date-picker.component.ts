import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Day } from './day.model';

@Component({
	selector: 'gm-datepicker',
	templateUrl: './date-picker.component.html',
	styleUrls: ['./date-picker.component.less']
})
export class DatePickerComponent implements OnInit {

	@Input() label: String;
	datePickerOpen: boolean = false;
	today: Date;
	displayedMonth: number;
	displayedYear: number;
	displayedDays: Day[];
	@Input('date') selectedDate: Date;
	@Output() dateChange : EventEmitter<Date> = new EventEmitter<Date>();
	@Input() minDate: Date;
	@Input() maxDate: Date;

	months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	constructor() { }

	ngOnInit() {
		this.today = new Date();
		this.today.setHours(0, 0, 0, 0);
		
		if(this.selectedDate){
			this.selectedDate.setHours(0, 0, 0, 0);
			this.displayedMonth = this.selectedDate.getMonth();
			this.displayedYear = this.selectedDate.getFullYear();
		}else{
			this.displayedMonth = this.today.getMonth();
			this.displayedYear = this.today.getFullYear();
		}

		if(this.minDate){
			this.minDate.setHours(0, 0, 0, 0);
		}

		if(this.maxDate){
			this.maxDate.setHours(0, 0, 0, 0);
		}

        this.displayedDays = this.generateDaysFor(this.displayedMonth, this.displayedYear);
	}

	openDatePicker(): void {
		this.datePickerOpen = true
	}

	closeDatePicker(): void {
		this.datePickerOpen = false;
	}

	switchToPreviousMonth(): void{
		if(this.displayedMonth == 0){
			this.displayedMonth = 11;
			this.displayedYear = this.displayedYear - 1;
		}else{
			this.displayedMonth = this.displayedMonth - 1;
		}
		this.displayedDays = this.generateDaysFor(this.displayedMonth, this.displayedYear);
	}

	switchToNextMonth(): void {
		if(this.displayedMonth == 11){
			this.displayedMonth = 0;
			this.displayedYear = this.displayedYear + 1;
		}else{
			this.displayedMonth = this.displayedMonth + 1;
		}
		this.displayedDays = this.generateDaysFor(this.displayedMonth, this.displayedYear);
	}

	selectDate(day):void{
		if(!day.disabled){
			this.selectedDate = day.date;
			this.dateChange.emit(this.selectedDate);
	
			this.displayedDays.forEach(otherDay => {
				otherDay.selected = false;
			})
			day.selected = true;
	
			if(day.previousMonth){
				this.switchToPreviousMonth();
			}else if(day.nextMonth){
				this.switchToNextMonth();
			};
	
			this.closeDatePicker();
		}
	}

	selectToday(): void{
		this.selectedDate = new Date();
		this.selectedDate.setHours(0, 0, 0, 0);
		this.dateChange.emit(this.selectedDate);

		this.displayedMonth = this.selectedDate.getMonth();
		this.displayedYear = this.selectedDate.getFullYear();
		this.displayedDays = this.generateDaysFor(this.displayedMonth, this.displayedYear);

		this.closeDatePicker();
	}

	disableToday(): boolean{
		if(this.minDate){
			if(this.today.getTime() < this.minDate.getTime()){
				return true;
			}
		}
		
		if(this.maxDate){
			if(this.today.getTime() > this.maxDate.getTime()){
				return true;
			}
		}

		return false;
	}

	clearDate(event):void{
		this.selectedDate = null;
		this.dateChange.emit(this.selectedDate);
		this.displayedDays.forEach(day => {
			day.selected = false;
		})
		this.closeDatePicker();
		event.stopPropagation();
	}

	dateClasses(day: Day){
		var classes = {
			'different-month': day.nextMonth || day.previousMonth,
			'today': day.today,
			'selected': day.selected,
			'disabled': day.disabled
		};

		return classes;
	}

	private numberOfDaysIn(month: number, year: number): number{
		if(month == 0 || month == 2|| month == 4 || month == 6 || month == 7 || month == 9 || month == 11){
			return 31;
		}else if(month == 3 || month == 5 || month == 8 || month == 10){
			return 30;
		}else if(month ==1){
			if(year%4 == 0){
				if(year%100 == 0){
					if(year%400 == 0){
						return 29;
					}
					return 28;
				}
				return 29;
			}
			return 28;
		}
		return 0;
	}

	private generateDaysFor(month: number, year: number): Day[]{
		var days: Day[] = [];

        var numberOfDaysInDisplayedMonth = this.numberOfDaysIn(month, year);
        var firstOfMonth = new Date(year, month, 1);
		var numberOfDaysFromPreviousMonth = firstOfMonth.getDay();
		var previousMonth: number;
		var yearForPreviousMonth: number;
		if(month == 0){
			previousMonth = 11;
			yearForPreviousMonth = year - 1;
		}else{
			previousMonth = month -1;
			yearForPreviousMonth = year;
		};
		var numberOfDaysInPreviousMonth = this.numberOfDaysIn(previousMonth, year);
		
        var firstDayFromPreviousMonth = numberOfDaysInPreviousMonth - numberOfDaysFromPreviousMonth + 1;
        var labelFromPreviousMonth: number;
        for (labelFromPreviousMonth = firstDayFromPreviousMonth; labelFromPreviousMonth <= numberOfDaysInPreviousMonth; labelFromPreviousMonth++) {
            var day: Day = {
				label: labelFromPreviousMonth,
				today: false,
				selected: false,
                previousMonth: true,
				nextMonth: false,
				disabled: false,
				date: new Date(yearForPreviousMonth, previousMonth, labelFromPreviousMonth),
			};
			day.date.setHours(0, 0, 0, 0);

			if(this.selectedDate){
				if(day.date.getTime() == this.selectedDate.getTime()){
					day.selected = true;
				}
			}

			if(this.maxDate){
				if(day.date.getTime() > this.maxDate.getTime()){
					day.disabled = true;
				}
			}

			if(this.minDate){
				if(day.date.getTime() < this.minDate.getTime()){
					day.disabled = true;
				}
			}
			
            days.push(day);
		}

        var labelFromThisMonth: number;
        for (labelFromThisMonth = 1; labelFromThisMonth <= numberOfDaysInDisplayedMonth; labelFromThisMonth++) {
            var day: Day = {
                label: labelFromThisMonth,
				today: false,
				selected: false,
                previousMonth: false,
				nextMonth: false,
				disabled: false,
				date: new Date(year, month, labelFromThisMonth)
			};
			day.date.setHours(0, 0, 0, 0);

			if(day.date.getTime() == this.today.getTime()){
				day.today = true;
			}

			if(this.selectedDate){
				if(day.date.getTime() == this.selectedDate.getTime()){
					day.selected = true;
				}
			}

			if(this.maxDate){
				if(day.date.getTime() > this.maxDate.getTime()){
					day.disabled = true;
				}
			}

			if(this.minDate){
				if(day.date.getTime() < this.minDate.getTime()){
					day.disabled = true;
				}
			}
			
            days.push(day);
		}
		
        var totalNumberOfWeeks = 5;
        if (days.length > 35) {
            totalNumberOfWeeks = 6;
        }else if(days.length < 29){
			totalNumberOfWeeks = 4;
		}

		var nextMonth: number;
		var yearForNextMonth : number;
		if(month == 11){
			nextMonth = 0;
			yearForNextMonth = year + 1;
		}else{
			nextMonth = month + 1;
			yearForNextMonth = year;
		};

        var daysFromNextMonth = totalNumberOfWeeks * 7 - days.length;
        var labelFromNextMonth: number;
        for (labelFromNextMonth = 1; labelFromNextMonth <= daysFromNextMonth; labelFromNextMonth++) {
            var day: Day = {
                label: labelFromNextMonth,
				today: false,
				selected: false,
                previousMonth: false,
				nextMonth: true,
				disabled: false,
				date: new Date(yearForNextMonth, nextMonth, labelFromNextMonth)
			};
			day.date.setHours(0, 0, 0, 0);

			if(this.selectedDate){
				if(day.date.getTime() == this.selectedDate.getTime()){
					day.selected = true;
				}
			}

			if(this.maxDate){
				if(day.date.getTime() > this.maxDate.getTime()){
					day.disabled = true;
				}
			}

			if(this.minDate){
				if(day.date.getTime() < this.minDate.getTime()){
					day.disabled = true;
				}
			}
			
            days.push(day);
		}

		return days;
	}
}
