from django.db import models

#creates a new db model to add it to django
class Play(models.Model):
    link = models.CharField(max_length=1000)
    thumbnail = models.CharField(max_length=1000)

    def __str__(self):
        return self.link
