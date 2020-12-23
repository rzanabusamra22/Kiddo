from backend.wsgi import application

# This file imports the WSGI-compatible object of the Django app,
# and renames it app so it is discoverable by App Engine
app = application

# gcloud API key
key = "AIzaSyBcHO6RYYzGOLMBnP-K6UhAUfSxAdsHPvM"
