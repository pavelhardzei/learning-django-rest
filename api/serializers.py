from rest_framework import serializers
from .models import Article
from django.contrib.auth.models import User


class ArticleSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Article
        fields = ['id', 'owner', 'title', 'description']


class UserSerializer(serializers.ModelSerializer):
    # articles = serializers.PrimaryKeyRelatedField(many=True, queryset=Article.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username']  #, 'articles']