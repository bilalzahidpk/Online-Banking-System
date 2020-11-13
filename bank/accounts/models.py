from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from django.utils import timezone


class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    created_date = models.DateTimeField(auto_now_add=True)
    savings_account = models.CharField(default="Savings", max_length=25)
    current_account = models.CharField(default="Current", max_length=25)
    current_balance = models.PositiveIntegerField(default=500)
    savings_balance = models.PositiveIntegerField(default=500)
    mobile_number = models.CharField(max_length=25, null=True)


class Complain(models.Model):
    complaint_issuer = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.PROTECT, null=True, unique=False)
    complaint = models.TextField(max_length=150)


class Bill(models.Model):
    bill_payer = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.PROTECT, null=True, unique=False)
    bill_type = models.CharField(max_length=25)
    bill_amount = models.PositiveIntegerField()
    bill_paid_date = models.DateTimeField(default=timezone.now())


def create_account(sender, instance, created, **kwargs):
    if created:
        Account.objects.create(user=instance)


post_save.connect(create_account, sender=User)


class Loan(models.Model):
    loan_name = models.CharField(max_length=25)
    loan_taker = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.PROTECT, null=True, unique=False)
    loan_amount = models.PositiveIntegerField()
    loan_period = models.PositiveIntegerField()
    loan_installments = models.PositiveIntegerField(blank=True, null=True)
    loan_final_amount = models.PositiveIntegerField(blank=True, null=True)

    def save(self, *args, **kwargs):
        self.loan_final_amount = self.loan_amount + (self.loan_amount*0.1)
        self.loan_installments = (self.loan_final_amount)/(self.loan_period)

        super(Loan, self).save(*args, **kwargs)
