from __future__ import unicode_literals

try:
    from urllib.parse import quote
except:
    from urllib import quote

from django.urls import Resolver404



class ModuleMatchName(str):
    """Dump str wrapper.
    Just to keep module reference over django url resolve calling
    hierarchy.
    """


try:
    from django.urls import URLResolver
    from django.urls.resolvers import RegexPattern

    class ModuleURLResolver(URLResolver):
        def __init__(self, regex, urlconf_name, default_kwargs=None, app_name=None, namespace=None, module=None):  # noqa D102
            self._module = module
            if app_name is None and namespace is not None:
                app_name = namespace
            pattern = RegexPattern(regex, is_endpoint=False)
            super(ModuleURLResolver, self).__init__(
                pattern,
                urlconf_name,
                default_kwargs,
                app_name=app_name,
                namespace=namespace,
            )

        def resolve(self, *args, **kwargs):  # noqa D102
            result = super(ModuleURLResolver, self).resolve(*args, **kwargs)

            if result and not getattr(self._module, 'installed', True):
                raise Resolver404({'message': 'Module not installed'})

            result.url_name = ModuleMatchName(result.url_name)
            result.url_name.module = self._module

            return result
except ImportError:
    # django 1.11
    from django.urls import RegexURLResolver

    class ModuleURLResolver(RegexURLResolver):
        """Module URL Resolver.
        A wrapper around RegexURLResolver that check the module installed
        state. And allows access to the resolved current module at runtime.
        Django reads url config once at the start. Installation and
        uninstallation the module at runtime don't produce change in the
        django url-conf.
        Url access check happens at the resolve time.
        """

        def __init__(self, *args, **kwargs):  # noqa D102
            self._module = kwargs.pop('module')
            super(ModuleURLResolver, self).__init__(*args, **kwargs)

        def resolve(self, *args, **kwargs):  # noqa D102
            result = super(ModuleURLResolver, self).resolve(*args, **kwargs)

            if result and not getattr(self._module, 'installed', True):
                raise Resolver404({'message': 'Module not installed'})

            result.url_name = ModuleMatchName(result.url_name)
            result.url_name.module = self._module

            return result
