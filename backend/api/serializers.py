from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Play,Admin,Supporter,Record,Photo


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
class RecordSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Record
        fields = ['link', 'category', 'thumbnail']
class PhotoSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Photo
        fields = ['category', 'link', 'sound']
        
