# Generated by Django 2.2.6 on 2019-11-29 19:13

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20191130_0011'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='bill_paid_date',
            field=models.DateTimeField(default=datetime.datetime(2019, 11, 29, 19, 13, 51, 288764, tzinfo=utc)),
        ),
    ]