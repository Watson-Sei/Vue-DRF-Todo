# from rest_framework.routers import DefaultRouter
# from . import api_views
#
#
# question_router = DefaultRouter()
# question_router.register(r'',api_views.QuestionViewSet)

from django.urls import path, include
from rest_framework import routers
from . import api_views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

router = routers.DefaultRouter()
router.register(r'questions', api_views.QuestionViewSet)

urlpatterns = [
    path('auth/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('',include(router.urls)),
    path('choices/<int:choice_id>/vote/',api_views.VoteView.as_view())
]