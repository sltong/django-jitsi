from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('meet/', include('meetings.urls', namespace='meetings')),
]
