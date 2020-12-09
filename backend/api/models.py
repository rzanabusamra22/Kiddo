from django.db import models
from django.contrib.auth.models import AbstractBaseUser, UserManager,PermissionsMixin
#creates a new db model to add it to django
class Play(models.Model):
    link = models.CharField(max_length=1000, unique=True)
    thumbnail = models.CharField(max_length=1000, unique=True)
    def __str__(self):
        return self.link

class User(AbstractBaseUser,PermissionsMixin):
    objects =  UserManager()
    is_staff = models.BooleanField(blank=True,default=True)
    is_superuser = models.BooleanField(default=True)
    username = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=40)
    email = models.EmailField(max_length=200, unique=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = [ 'email','password']
    
    def __str__(self):
        return self.username
        
class Supporter(models.Model):
    username = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=40)
    email = models.CharField(max_length=200, unique=True)
    donation = models.IntegerField()
    def __str__(self):
        return self.username

class Record(models.Model):
    link = models.CharField(max_length=1000, unique=True)
    category = models.CharField(max_length=50)
    thumbnail = models.CharField(max_length=1000, unique=True)
    def __str__(self):
        return self.link

class Photo(models.Model):
    link = models.CharField(max_length=1000, unique=True)
    category = models.CharField(max_length=50)
    sound = models.CharField(max_length=1000)
    def __str__(self):
        return self.link
        
