# Generated by Django 3.1.4 on 2020-12-16 20:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20201216_2229'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='phone',
            field=models.CharField(max_length=40),
        ),
    ]
