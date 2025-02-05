from django.db import models
from django.contrib.auth.models import User

class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    file = models.FileField(upload_to='resumes/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='pending')  # 'pending', 'completed', etc.
    analysis_result = models.TextField(null=True, blank=True)  # Store AI feedback or parsed content.

    def __str__(self):
        return f"Resume uploaded by {self.user.username} at {self.uploaded_at}"
