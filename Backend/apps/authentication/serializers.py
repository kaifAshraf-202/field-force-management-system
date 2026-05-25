from rest_framework import serializers
from django.contrib.auth import authenticate

from apps.users.models import User


class LoginSerializer(serializers.Serializer):

    username = serializers.CharField()

    password = serializers.CharField(write_only=True)

    def validate(self, data):

        username = data.get("username")

        password = data.get("password")

        if username and password:

            user = authenticate(
                username=username,
                password=password
            )

            if not user:
                 raise serializers.ValidationError(
                  "Invalid credentials"
              )
        else:
            raise serializers.ValidationError(
                "Both username and password are required"
            )

        data["user"] = user

        return data


class RegisterSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    class Meta:

        model = User

        fields = [
            "username",
            "email",
            "password",
            "full_name",
            "phone",
            "role",
        ]

    def create(self, validated_data):

        password = validated_data.pop("password")

        user = User(**validated_data)

        user.set_password(password)

        user.save()

        return user


class UserSerializer(serializers.ModelSerializer):

    class Meta:

        model = User

        fields = [
            "id",
            "username",
            "email",
            "full_name",
            "phone",
            "role",
        ]