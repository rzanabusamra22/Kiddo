# backend/api/admin.py
from django.contrib import admin
from .models import *

# This handles the routes inside the admin version of the website
admin.site.register(User)
admin.site.register(History)
admin.site.register(Photo)
admin.site.register(Play)
admin.site.register(Record)
admin.site.register(Donation)
