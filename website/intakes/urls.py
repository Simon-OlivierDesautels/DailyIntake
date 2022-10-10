from django.urls import path, register_converter

from . import views
from .converters import DateConverter

register_converter(DateConverter, 'date')

app_name = 'intakes'

urlpatterns = [
    path('',views.calendar_view,name="calendar"),
    # path('<date:current_date>/',views.calendar_view,name="calendar"),
    path('<date:current_date>/',views.IntakesListView.as_view(),name="intake-list"),
]

