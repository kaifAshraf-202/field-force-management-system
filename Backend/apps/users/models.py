from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):

    ROLE_CHOICES = (
        ('ADMIN', 'Admin'),
        ('REGIONAL_MANAGER', 'Regional Manager'),
        ('TEAM_LEAD', 'Team Lead'),
        ('FIELD_AGENT', 'Field Agent'),
        ('AUDITOR', 'Auditor'),
    )

    full_name = models.CharField(
        max_length=255
    )

    phone = models.CharField(
        max_length=15,
        blank=True
    )

    role = models.CharField(
        max_length=30,
        choices=ROLE_CHOICES,
        default='FIELD_AGENT'
    )

    region = models.ForeignKey(
        'roles.Region',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='users'
    )

    team = models.ForeignKey(
        'roles.Team',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='users'
    )

    manager = models.ForeignKey(
        'self',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='subordinates'
    )

    def __str__(self):

        return self.username