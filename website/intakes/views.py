from django.views.generic.list import ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from .models import Intake, Meal
from .utils import Calendar 
import datetime

class IntakesListView(LoginRequiredMixin, ListView):
    model = Intake
    template_name = "intakes/intakes-list.html"

    def get_queryset(self):
        requested_date = self.kwargs.get('current_date')
        return Intake.objects.filter(user=self.request.user).filter(time=requested_date)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context_filtered = {}
        context_filtered['date'] = self.kwargs.get('current_date')

        meals = {}
        
        for meal in Meal.objects.all():
            meal_info = {}
            intake_list = {}

            for intake in context["intake_list"].filter(meal__name=meal.name):
                intake_list[intake] = Intake.calculate_factors(intake)

            meal_info["list"] = intake_list
            meal_info["resume"] = Intake.calculate_all_factors(intake_list)
            meals[meal.name] = meal_info

        context_filtered["meals"] = meals

        day_resume = Intake.calculate_all_factors(context["intake_list"])
        context_filtered["day_resume"] = day_resume
        # print(context_filtered)
        return context_filtered

    def get_context_object_name(self, object_list):
        """Get the name of the item to be used in the context."""
        if self.context_object_name:
            return self.context_object_name
        elif hasattr(object_list, 'model'):
            return '%s_list' % object_list.model._meta.model_name
        else:
            return None

def calendar_view(request,date=datetime.date.today()):
    calendar = Calendar().formatmonth(date.year,date.month,True)
    return render(request,'intakes/calendar.html',{"calendar":calendar})