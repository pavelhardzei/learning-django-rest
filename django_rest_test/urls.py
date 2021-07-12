from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from api import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', views.UserViewSet, basename='users')

urlpatterns = [
    path('', TemplateView.as_view(template_name='api/home.html')),
    path('admin/', admin.site.urls),
    path('articles/', include('api.urls')),
    path('', include(router.urls))
]

urlpatterns += [
    path('api-auth/', include('rest_framework.urls'))
]