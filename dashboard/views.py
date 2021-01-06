import requests
from requests.auth import HTTPBasicAuth 
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    url = "https://app.konfuzio.com/api/projects/103/docs/"
    auth = HTTPBasicAuth('xpoda.info@gmail.com','xhensila2501')
    response = requests.get(url=url, auth=auth).json()
    context = {'reports_list': response['results']}
    return render(request,'dashboard/dashboard.html',context)


def layout(request,document_id):
    url = "https://app.konfuzio.com/api/projects/103/docs/{}/annotations/"

    auth = HTTPBasicAuth('xpoda.info@gmail.com','xhensila2501')
    response = requests.get(url.format(document_id),auth=auth).json()
    print(response)
    context = {'document': response}
    return render(request,'dashboard/layout.html',context)
