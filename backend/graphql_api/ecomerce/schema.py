import graphene

from graphene_django.types import DjangoObjectType

from .models import Item, Categories

class ItemType(DjangoObjectType):
    class Meta:
        model = Item
        
class CategoryType(DjangoObjectType):
    class Meta:
        model = Categories

class Query(graphene.ObjectType):
    all_items = graphene.List(ItemType)
    all_categories = graphene.List(CategoryType)

    def resolve_all_items(self, info, **kwargs):
        return Item.objects.all()
    
    def resolve_all_categories(self, info, **kwargs):
        return Categories.objects.all()