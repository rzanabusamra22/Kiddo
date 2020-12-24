# backend/api/serializers.py
from .models import *
from rest_framework import serializers
from djoser.serializers import UserCreateSerializer

class UserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = [ 'id', 'username', 'password', 'email', 'phone', 'thumbnail', 'is_staff', 'is_active', 'is_superuser']

class HistorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = History
        fields = [ 'id', 'user', 'link', 'thumbnail', 'kind']

class DonationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Donation
        fields = ['user', 'amount']

class RecordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Record
        fields = ['link', 'category', 'thumbnail']

class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Photo
        fields = ['category', 'link', 'sound']

class PlaySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Play
        fields = ['category', 'link', 'thumbnail']
        