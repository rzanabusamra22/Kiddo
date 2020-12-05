from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Play,Admin,Supporter,Records,Photos


# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']

class PlaySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Play
        fields = ['link', 'thumbnail']

class AdminSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Admin
        fields = [ 'username', 'password', 'email']
class SupporterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Supporter
        fields = ['username','password','email','donation']
class RecordsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Records
        fields = ['link', 'category', 'thumbnail']
class PhotosSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Photos
        fields = ['category', 'link', 'sound']
        
