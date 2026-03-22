from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    points = models.IntegerField(default=0)
    level = models.IntegerField(default=1)
    # Add neon-specific optimization for large user bases, e.g. indexing
    class Meta:
        indexes = [
            models.Index(fields=['points', '-date_joined']),
        ]

class Course(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    language = models.CharField(max_length=50, choices=[('python', 'Python'), ('javascript', 'JavaScript'), ('html', 'HTML/CSS')])
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Lesson(models.Model):
    course = models.ForeignKey(Course, related_name='lessons', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content_markdown = models.TextField()
    order = models.IntegerField(default=0)
    points_reward = models.IntegerField(default=10)
    expected_output = models.TextField(blank=True, null=True, help_text="Used to verify code execution correctness.")

    class Meta:
        ordering = ['order']

class UserProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField(null=True, blank=True)

    class Meta:
        unique_together = ('user', 'lesson')

class CodeSubmission(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
    code = models.TextField()
    output = models.TextField(blank=True, null=True)
    success = models.BooleanField(default=False)
    submitted_at = models.DateTimeField(auto_now_add=True)

class ForumTopic(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    
class ForumPost(models.Model):
    topic = models.ForeignKey(ForumTopic, related_name='posts', on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
