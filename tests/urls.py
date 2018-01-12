# -*- coding: utf-8 -*-
from __future__ import unicode_literals, absolute_import

from django.conf.urls import url, include

from rinno_material.urls import urlpatterns as rinno_material_urls

urlpatterns = [
    url(r'^', include(rinno_material_urls, namespace='rinno_material')),
]
