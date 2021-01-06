from django.urls import path
from dashboard import views
urlpatterns = [
    path('', views.index, name='index'),
    path('layout/<str:document_id>/', views.layout, name='layout'),
]