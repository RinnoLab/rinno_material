# -*- coding: utf-8
from django.apps import AppConfig
from .urlconf import ModuleURLResolver


class RinnoMaterialConfig(AppConfig):
    name = 'rinno_material'

    @property
    def urls(self):  # noqa D102
        return ModuleURLResolver(
            r'^admin/', admin.site.urls[0], namespace='admin', module=self)
