# Generated by Django 2.2.6 on 2020-06-04 01:30

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0050_auto_20200604_0629'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='bill_paid_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 6, 4, 1, 30, 30, 920524, tzinfo=utc)),
        ),
    ]
