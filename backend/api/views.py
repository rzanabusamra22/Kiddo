from django.contrib.auth.models import User
from .serializers import PlaySerializer, UserSerializer, AdminSerializer, SupporterSerializer, RecordsSerializer, PhotosSerializer
from rest_framework import viewsets
from .models import Play, Admin, Supporter, Records, Photos

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


# def index(request):
#     admin_list = Admin.objects
#     context = {'admin_list': admin_list}
#    return render(request, '')

# Rest api end point


# def get_User_list(request):
#     if request.method == 'GET':
#         User_list = User.objects
#         serializer = UserSerializer(User_list, many=True)
#         return JsonResponse(serializer.data, safe=False)


# ViewSets define the view behavior.
def get(self, request, format=None):
    serializer = self.serializer_class(data=request.data)
    if serializer.is_valid():
        obj = serializer.save()
        response = Response(standardResponse(data=serializer.data), 
                            status=status.HTTP_201_CREATED)
        # If you have defined a get_absolute_url method on your model, then
        # you can use that to get a URL for the new object
        response['Location'] = obj.get_absolute_url()
        return response

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
