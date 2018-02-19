from django.conf.urls import url

from .views import PlayerID

urlpatterns = [
    url(r'update_player_id/(?P<onesignal_player_id>[0-9a-f-]+)',
        PlayerID.as_view(),
        name='update_player_id'),
]
