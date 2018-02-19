import json

from django.views import View
from django.http import HttpResponse


class PlayerID(View):

    def get(self, request, *args, **kwargs):
        onesignal_player_id = 'onesignal_player_id'
        data = {onesignal_player_id: None}
        if onesignal_player_id in kwargs:
            player_id = kwargs.get(onesignal_player_id)
            request.session.__setitem__(onesignal_player_id, player_id)
            data.update({onesignal_player_id: player_id})
        return HttpResponse(json.dumps(data), content_type="application/json")
