from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Play

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

class PlaySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Play
        fields = ('link', 'thumbnail')

