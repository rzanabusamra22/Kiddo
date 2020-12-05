from django.contrib.auth.models import User
from .serializers import PlaySerializer, UserSerializer
from rest_framework import viewsets
from .models import Play

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PlayViewSet(viewsets.ModelViewSet):
    queryset = Play.objects.all()
    serializer_class = PlaySerializer
