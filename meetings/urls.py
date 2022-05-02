from django.urls import path

from .views import index, meeting_detail


app_name = 'meetings'

urlpatterns = [
    path('', index),
    path('<str:meeting_name>', meeting_detail),
]
