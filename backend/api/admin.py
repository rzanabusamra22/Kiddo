from django.contrib import admin
from .models import Play, Photo, Admin, Record, Supporter

# Register models
admin.site.register(Admin)
admin.site.register(Photo)
admin.site.register(Play)
admin.site.register(Record)
admin.site.register(Supporter)


