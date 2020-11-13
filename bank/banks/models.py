from django.db import models

# Create your models here.


class Branch(models.Model):
    branch_name = models.CharField(max_length=25)
    branch_address = models.TextField()
    branch_country = models.CharField(max_length=25)
    branch_city = models.CharField(max_length=25)
    branch_contact = models.CharField(max_length=25)


class Bank(models.Model):
    bank_name = models.CharField(max_length=25)
    bank_head_office = models.TextField()
    bank_uan = models.CharField(max_length=25)
    branches = models.ForeignKey(Branch, on_delete=models.CASCADE)
