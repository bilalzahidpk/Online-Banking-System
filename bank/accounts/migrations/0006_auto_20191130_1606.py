# Generated by Django 2.2.6 on 2019-11-30 11:06

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_auto_20191130_1601'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='bill_paid_date',
            field=models.DateTimeField(default=datetime.datetime(2019, 11, 30, 11, 6, 43, 26305, tzinfo=utc)),
        ),
    ]
