from django.db import models
from rest_framework import routers, serializers, viewsets

#creates a new db model to add it to django
class play(models.Model):
    link = models.CharField(max_length=1000)
    thumbnail = models.CharField(max_length=1000)
    def __str__(self):
        return self.link

# Serializers define the API representation.
class playSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = play
        fields = ('link', 'photo')