# backend/api/models.py
from django.db import models
from phone_field import PhoneField
from django.contrib.auth.models import AbstractBaseUser, UserManager,PermissionsMixin

# Creates a new db model to adds it to the currently connected database when migrations are being made
class User(AbstractBaseUser,PermissionsMixin):
    objects =  UserManager()
    is_staff = models.BooleanField(default=False, blank=True)
    is_active = models.BooleanField(default=True, blank=True)
    is_superuser = models.BooleanField(default=False, blank=True)
    username = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=90)
    email = models.EmailField(max_length=90, default="", blank=True, unique=True)
    phone = models.CharField(max_length=40, default="", blank=True, help_text='Contact phone number')
    thumbnail = models.CharField(max_length=255, blank=True, default="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4FMgEe33BwCdnfLO89QdJEYxWMgc9I982fw&usqp=CAU")
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['password']
    def __str__(self):
        return self.username
    def mail(self):
        return self.username + "\'s email is : " + self.email
        
class History(models.Model):
    user = models.CharField(max_length=40)
    link = models.CharField(max_length=255)
    thumbnail = models.CharField(max_length=255)
    kind = models.CharField(max_length=50)

class Donation(models.Model):
    user = models.CharField(max_length=40, default="unknown")
    amount = models.IntegerField(default=0)
    REQUIRED_FIELDS = [ "amount" ]

class Record(models.Model):
    link = models.CharField(max_length=255, unique=True)
    category = models.CharField(max_length=50, default="video")
    thumbnail = models.CharField(max_length=255, unique=True)

class Photo(models.Model):
    link = models.CharField(max_length=255, unique=True)
    category = models.CharField(max_length=50, default="picture")
    sound = models.CharField(max_length=255)

class Play(models.Model):
    link = models.CharField(max_length=255, unique=True)
    category = models.CharField(max_length=50, default="game")
    thumbnail = models.CharField(max_length=255, unique=True)
    