# Generated by Django 2.2.6 on 2020-05-27 00:19

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0042_auto_20200527_0516'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='bill_paid_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 5, 27, 0, 19, 57, 915967, tzinfo=utc)),
        ),
    ]
