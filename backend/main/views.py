from .models import Categories, Item
from rest_framework import viewsets
from .serializers import ItemSerializer, CategoriesSerializer


class ItemViewSet(viewsets.ModelViewSet):
    
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class CategoriesViewSet(viewsets.ModelViewSet):
    
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer