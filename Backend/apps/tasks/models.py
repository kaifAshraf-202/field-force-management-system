from django.db import models

# Create your models here.
from django.db import models

from apps.users.models import User


class Task(models.Model):

    STATUS_CHOICES = (

        ('PENDING', 'Pending'),

        ('IN_PROGRESS', 'In Progress'),

        ('COMPLETED', 'Completed'),

        ('CANCELLED', 'Cancelled'),

    )

    PRIORITY_CHOICES = (

        ('LOW', 'Low'),

        ('MEDIUM', 'Medium'),

        ('HIGH', 'High'),

    )

    title = models.CharField(
        max_length=255
    )

    description = models.TextField()

    assigned_to = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='tasks'
    )

    assigned_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='assigned_tasks'
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='PENDING'
    )

    priority = models.CharField(
        max_length=20,
        choices=PRIORITY_CHOICES,
        default='MEDIUM'
    )

    due_date = models.DateField()

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):

        return self.title