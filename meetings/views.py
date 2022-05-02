from django.shortcuts import render
from django.template.response import TemplateResponse


def index(request):
    return TemplateResponse(request, 'meetings/index.html', {})

def meeting_detail(request, meeting_name: str):
    return TemplateResponse(request, 'meetings/meeting_detail.html', {})
