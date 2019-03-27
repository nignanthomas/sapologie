from django.conf.urls import url
from .views import *


urlpatterns = [
    url(r'^product/$', ProductListView.as_view()),
    url(r'product/(?P<pk>[0-9]+)/$', ProductDetailView.as_view()),
    url(r'^order/$', OrderCreateView.as_view()),
]
