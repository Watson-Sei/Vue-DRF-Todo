from rest_framework import viewsets

from .models import Question
from .serializers import QuestionSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


from rest_framework import generics
from rest_framework.response import Response

from .models import Choice
from .serializers import ChoiceSerializer


class VoteView(generics.CreateAPIView):
    serializer_class = ChoiceSerializer

    def post(self, request, choice_id, *args, **kwargs):
        obj = generics.get_object_or_404(
            queryset=Choice.objects.all(),
            id=choice_id,
        )
        obj.votes += 1
        obj.save()
        s = ChoiceSerializer(instance=obj)
        return Response(s.data)
