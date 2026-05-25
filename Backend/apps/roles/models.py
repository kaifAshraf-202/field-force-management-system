from django.db import models


class Region(models.Model):

    name = models.CharField(
        max_length=255
    )

    def __str__(self):

        return self.name


class Team(models.Model):

    name = models.CharField(
        max_length=255
    )

    region = models.ForeignKey(
        Region,
        on_delete=models.CASCADE,
        related_name='teams'
    )

    def __str__(self):

        return self.name