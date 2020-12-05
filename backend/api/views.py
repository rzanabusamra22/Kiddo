from django.contrib.auth.models import User
from .serializers import PlaySerializer, UserSerializer,AdminSerializer,SupporterSerializer,RecordsSerializer,PhotosSerializer
from rest_framework import viewsets
from .models import Play,Admin,Supporter,Records,Photos

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PlayViewSet(viewsets.ModelViewSet):
    queryset = Play.objects.all()
    serializer_class = PlaySerializer

class AdminViewSet (viewsets.ModelViewSet):
    queryset = Admin.objects.all()
    serializer_class = PlaySerializer
class SupporterViewSet (viewsets.ModelViewSet):
    queryset = Supporter.objects.all()
    serializer_class = PlaySerializer
class RecordsViewSet (viewsets.ModelViewSet):
    queryset = Records.objects.all()
    serializer_class = PlaySerializer

class PhotosViewSet (viewsets.ModelViewSet):
    queryset = Photos.objects.all()
    serializer_class = PlaySerializer