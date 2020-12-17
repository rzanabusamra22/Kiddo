# Generated by Django 3.1.4 on 2020-12-16 20:41

from django.db import migrations
import phone_field.models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_remove_user_phone'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='phone',
            field=phone_field.models.PhoneField(blank=True, help_text='Contact phone number', max_length=31),
        ),
    ]
