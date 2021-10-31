import graphene

from ecomerce.schema import Query as items_query


class Query(items_query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

schema = graphene.Schema(query=Query)