# Generated by Django 2.2.6 on 2019-12-01 20:06

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0021_auto_20191202_0057'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='bill_paid_date',
            field=models.DateTimeField(default=datetime.datetime(2019, 12, 1, 20, 6, 48, 213134, tzinfo=utc)),
        ),
    ]