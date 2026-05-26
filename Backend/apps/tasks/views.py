from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Task

from .serializers import TaskSerializer


class TaskListCreateView(

    generics.ListCreateAPIView

):

    serializer_class = TaskSerializer

    permission_classes = [IsAuthenticated]

    queryset = Task.objects.all()

    def perform_create(self, serializer):

        serializer.save(
            assigned_by=self.request.user
        )


class TaskDetailView(

    generics.RetrieveUpdateDestroyAPIView

):

    serializer_class = TaskSerializer

    permission_classes = [IsAuthenticated]

    queryset = Task.objects.all()