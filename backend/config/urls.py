from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    # To be added later: path('api/', include('core.urls')),
]
