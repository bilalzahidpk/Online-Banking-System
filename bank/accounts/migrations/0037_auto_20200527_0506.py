# Generated by Django 2.2.6 on 2020-05-27 00:06

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0036_auto_20200527_0503'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='bill_paid_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 5, 27, 0, 6, 19, 847404, tzinfo=utc)),
        ),
    ]