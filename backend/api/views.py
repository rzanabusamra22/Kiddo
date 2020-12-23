# backend/api/views.py
import json
import uuid
import stripe 
import datetime
from .models import *
from .serializers import *
from datetime import datetime
from django.utils import timezone
from rest_framework import status
from rest_framework import viewsets
from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.decorators import api_view, permission_classes

class UserViewSet (viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['username']
    search_fields = ['username']
    ordering_fields = '__all__'
    ordering = ['username']

class HistoryViewSet (viewsets.ModelViewSet):
    queryset = History.objects.all()
    serializer_class = HistorySerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['user', 'kind']
    search_fields = ['user', 'kind']
    ordering_fields = ['user', 'kind']

class DonationViewSet (viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['user']
    search_fields = ['user']
    ordering_fields = ['user','amount']

class PlayViewSet(viewsets.ModelViewSet):
    queryset = Play.objects.all()
    serializer_class = PlaySerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['category']
    search_fields = ['category']
    ordering_fields = ['category']

class RecordViewSet (viewsets.ModelViewSet):
    queryset = Record.objects.all()
    serializer_class = RecordSerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['category']
    search_fields = ['category']
    ordering_fields = ['category']

class PhotoViewSet (viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer
    filter_backends = [DjangoFilterBackend,SearchFilter, OrderingFilter]
    filterset_fields = ['category']
    search_fields = ['category']
    ordering_fields = ['category']

# Creates new accounts
@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    data = JSONParser().parse(request)
    serializer = UserSerializer(data=data)
    if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors, status=400)

# Recieves donations
@api_view(['POST'])
@permission_classes([AllowAny])
def donate(request):
    data = JSONParser().parse(request)
    stripe.api_key = "sk_test_51HoFgjCxgtcfoZwvcEdcYWIIp09TagQbzRsNAnY34gPlj6zMdDSxgN9tK9FzMbVIJWJMEkM7SKlqAxTZEGmS9CHl00Dxl3xZhc"
    try:
        stripe.Charge.create(
            amount=data["amount"],
            currency="USD",
            source=data["authToken"],
        )
    except:
        return Response('Credit Card Invalid', status=401)
    data.pop("authToken")
    serializer = DonationSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data, status=201)
    return JsonResponse(serializer.errors)

# Returns the ID of the current user
@api_view(['GET'])
def id(request):
    current_user = request.user
    return Response(current_user.id)

# Returns server status and time
@api_view(['GET'])
def index(request):
    date = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
    message = 'server is live current time is '
    return Response(data=message + date,status=status.HTTP_200_OK)
    