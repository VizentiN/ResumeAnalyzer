from rest_framework import serializers
from .models import Resume

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ['user', 'file', 'status', 'uploaded_at', 'analysis_result']
