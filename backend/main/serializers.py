from .models import Item, Categories
from rest_framework import serializers


class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'pic', 'name', 'price', 'category']


class CategoriesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Categories
        fields = ['id', 'name']