from django.urls import path

from .views import PlayerID

urlpatterns = [
    path('update_player_id/<onesignal_player_id>/', PlayerID.as_view(), name='update_player_id'),
]
