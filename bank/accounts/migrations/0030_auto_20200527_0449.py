# Generated by Django 2.2.6 on 2020-05-26 23:49

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0029_auto_20200527_0446'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='bill_paid_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 5, 26, 23, 49, 8, 782043, tzinfo=utc)),
        ),
    ]
