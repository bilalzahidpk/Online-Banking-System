# Generated by Django 2.2.6 on 2019-12-01 19:30

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0013_auto_20191201_2353'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='bill_paid_date',
            field=models.DateTimeField(default=datetime.datetime(2019, 12, 1, 19, 30, 12, 316010, tzinfo=utc)),
        ),
    ]
