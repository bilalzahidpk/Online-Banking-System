# Generated by Django 2.2.6 on 2019-11-30 12:03

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_auto_20191130_1701'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='bill_paid_date',
            field=models.DateTimeField(default=datetime.datetime(2019, 11, 30, 12, 3, 27, 66897, tzinfo=utc)),
        ),
    ]
