from django.contrib import admin
from .models import *

# Register models
admin.site.register(User)
admin.site.register(Photo)
admin.site.register(Play)
admin.site.register(Record)
admin.site.register(Supporter)


