# Generated by Django 2.2.6 on 2019-11-30 09:05

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_auto_20191130_0013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='account',
            name='current_balance',
            field=models.PositiveIntegerField(default=500),
        ),
        migrations.AlterField(
            model_name='account',
            name='savings_balance',
            field=models.PositiveIntegerField(default=500),
        ),
        migrations.AlterField(
            model_name='bill',
            name='bill_amount',
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name='bill',
            name='bill_paid_date',
            field=models.DateTimeField(default=datetime.datetime(2019, 11, 30, 9, 5, 17, 473868, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='loan',
            name='loan_amount',
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name='loan',
            name='loan_final_amount',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='loan',
            name='loan_installments',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='loan',
            name='loan_period',
            field=models.PositiveIntegerField(),
        ),
    ]
