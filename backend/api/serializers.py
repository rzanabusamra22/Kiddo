#from django.contrib.auth.models import User
from rest_framework import serializers
from .models import *
from djoser.serializers import UserCreateSerializer

# Serializers define the API representation.
# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ['url', 'username', 'email', 'is_staff']

class PlaySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Play
        fields = ['category', 'link', 'thumbnail']

class UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = [ 'username', 'password', 'email', 'phone', 'thumbnail', 'is_staff', 'is_superuser',]

class HistorySerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = History
        fields = ['username', 'link', 'thumbnail', 'kind']

class DonationSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = Donation
        fields = ['username', 'donation']

class RecordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Record
        fields = ['link', 'category', 'thumbnail']

class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Photo
        fields = ['category', 'link', 'sound']
        
