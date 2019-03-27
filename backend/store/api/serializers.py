from rest_framework import serializers
from store.models import *


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','title', 'img', 'company', 'price',
                  'info', 'inCart', 'count', 'total')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id','product', 'user', 'total')
