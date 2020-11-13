from django.contrib import admin
from .models import Account, Complain, Bill, Loan
# Register your models here.
admin.site.register(Account)
admin.site.register(Complain)
admin.site.register(Bill)
admin.site.register(Loan)
