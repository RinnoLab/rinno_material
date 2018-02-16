import re
from collections import OrderedDict

from django import template
from django.conf import settings
from django.contrib.contenttypes.models import ContentType
from django.contrib import admin
from django.utils.safestring import mark_safe
from django.utils.text import capfirst

numeric_test = re.compile("^\d+$")
register = template.Library()


@register.filter
def get_onesignal_app_id(request):
    if hasattr(settings, 'ONESIGNAL_APP_ID'):
        request.session['onesignal_app_id'] = settings.ONESIGNAL_APP_ID
        return settings.ONESIGNAL_APP_ID
    return False


@register.filter
def getattribute(value, arg):
    """Gets an attribute of an object dynamically from a string name"""

    if hasattr(value, str(arg)):
        return getattr(value, arg)
    elif hasattr(value, 'has_key') and arg in value:
        return value[arg]
    elif numeric_test.match(str(arg)) and len(value) > int(arg):
        return value[int(arg)]


@register.simple_tag(name='get_org_style')
def get_org_style(request, section=None, default_color=None):
    """Retornar el objeto OrganizationStyle asociado al usuario."""
    organization_id = request.session.get('organization_id')
    if hasattr(request.user, 'current_organization'):
        current_organization = getattr(request.user, 'current_organization')
        if current_organization:
            return getattr(current_organization.organizationstyle, section)
    return default_color


@register.filter
def applist(request):
    app_dict = {}
    user = request.user
    site = admin.site
    for model, model_admin in site._registry.items():
        app_label = model._meta.app_label
        has_module_perms = user.has_module_perms(app_label)

        if has_module_perms:
            perms = model_admin.get_model_perms(request)

            if True in perms.values():
                model_dict = {
                    'name': capfirst(model._meta.verbose_name_plural),
                    'admin_url': mark_safe('/admin/%s/%s/' % (app_label, model.__name__.lower())),
                    'perms': perms,
                }
                if app_label in app_dict:
                    app_dict[app_label]['models'].append(model_dict)
                else:
                    app_dict[app_label] = {
                        'name': app_label.title(),
                        'app_url': app_label + '/',
                        'has_module_perms': has_module_perms,
                        'models': [model_dict],
                    }
    app_list = OrderedDict(app_dict).values()
    return app_list


@register.filter
def get_org_icon(request):
    organization_id = request.session.get('organization_id')
    if hasattr(request.user, 'current_organization'):
        current_organization = getattr(request.user, 'current_organization')
        if current_organization:
            return current_organization.icon.url
    org_icon = '{}/static/img/logoRinno.png'
    org_icon = org_icon.format(
        request.build_absolute_uri().split(request.get_full_path())[0])
    return org_icon


@register.filter
def get_organizations_list(request):
    organization_list = request.session.get('organizations_list', [])
    if hasattr(request.user, 'current_organization'):
        organization_list = getattr(request.user, 'current_organization')
        if organization_list:
            organization_list = ContentType.objects.get_for_model(
                organization_list.__class__).model_class().objects.filter(
                    groups__user=request.user)
    return organization_list
