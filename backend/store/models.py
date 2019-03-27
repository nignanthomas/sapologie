from django.db import models

# Create your models here.


class Product(models.Model):
    title = models.CharField(max_length=100)
    img = models.ImageField(upload_to='photos/', null=True)
    price = models.IntegerField()
    company = models.CharField(max_length=100)
    info = models.TextField()
    inCart = models.BooleanField(default=False)
    count = models.IntegerField(default=0)
    total = models.IntegerField(default=0)

    def __str__(self):
        return self.title


class Order(models.Model):
    product = models.name = models.ForeignKey(Product, related_name='product', on_delete=models.CASCADE)
    total = models.FloatField()
    user = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.user} {self.product}"