from datetime import datetime, timedelta
from calendar import HTMLCalendar
from .models import Intake
import datetime

class Calendar(HTMLCalendar):
	def __init__(self, year=None, month=None):
		self.year = year
		self.month = month
		super(Calendar, self).__init__()

	# formats a day as a td
	# filter intakes by day
	def formatday(self, day, today, intakes):
		events_per_day = intakes.filter(time__day=day)
        
		if today != None and day == today.day:
			return f"<td><span class='date--special' style='background-color:green'>{day}</span></td>"
		for event in events_per_day:
			return f"<td><span class='date--special' style='color:red'>{day}</span></td>"
		if day != 0:
			return f"<td><span class='date'>{day}</span></td>"

		return f"<td></td>"

	# formats a week as a tr 
	def formatweek(self, theweek, today, intakes):
		week = ''
		for d, weekday in theweek:
			week += self.formatday(d, today, intakes)
		return f'<tr> {week} </tr>'

	# formats a month as a table
	# filter intakes by year and month
	def formatmonth(self, year,month,withyear=True):
		intakes = Intake.objects.filter(time__year=year, time__month=month)

		today = datetime.date.today()
		if today.year != year or today.month != month:
			today = None

		cal = f'<table border="0" cellpadding="0" cellspacing="0" class="calendar">\n'
		cal += f'{self.formatmonthname(year, month, withyear)}\n'
		cal += f'{self.formatweekheader()}\n'
		for week in self.monthdays2calendar(year, month):
			cal += f'{self.formatweek(week,today, intakes)}\n'
		return cal