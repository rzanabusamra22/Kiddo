from django.test.runner import DiscoverRunner
from django.test import TransactionTestCase
from django.test import SimpleTestCase
from django.test import TestCase
from api.models import User

class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create(username="john", password="123qwe@#", email="john@gmail.com")
        User.objects.create(username="sara", password="324rew@#", email="sara@gmail.com")

    def test_users(self):
        """Check if users are added"""
        john = User.objects.get(username="john")
        sara = User.objects.get(username="sara")
        self.assertEqual(john.mail(), 'john\'s email is : john@gmail.com')
        self.assertEqual(sara.mail(), 'sara\'s email is : sara@gmail.com')
