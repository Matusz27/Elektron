from django.db import models




    
class Categories(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=255)
       
    def __str__(self):
        return self.name


class Item(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    pic = models.ImageField(null=True, blank=True)
    name = models.CharField(max_length=255)
    price = models.FloatField()
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    