from django.db import models

#creates a new db model to add it to django
class Play(models.Model):
    link = models.CharField(max_length=1000)
    thumbnail = models.CharField(max_length=1000)
    def __str__(self):
        return self.link

class Admin(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=40)
    email = models.CharField(max_length=200)
    def __str__(self):
        return self.username
        
class Supporter(models.Model):
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=40)
    email = models.CharField(max_length=200)
    donation = models.IntegerField()
    def __str__(self):
        return self.username

class Record(models.Model):
    link = models.CharField(max_length=1000)
    category = models.CharField(max_length=50)
    thumbnail = models.CharField(max_length=1000)
    def __str__(self):
        return self.link

class Photo(models.Model):
    category = models.CharField(max_length=50)
    link = models.CharField(max_length=1000)
    sound = models.CharField(max_length=1000)
    def __str__(self):
        return self.link
        
