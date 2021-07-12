from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from api import views

urlpatterns = [
    path('', TemplateView.as_view(template_name='api/home.html')),
    path('admin/', admin.site.urls),
    path('articles/', include('api.urls')),
    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='user-detail')
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls'))
]