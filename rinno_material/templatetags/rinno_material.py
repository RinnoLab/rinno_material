import re
from django import template
from django.conf import settings

numeric_test = re.compile("^\d+$")
register = template.Library()


@register.filter
def getattribute(value, arg):
    """Gets an attribute of an object dynamically from a string name"""

    if hasattr(value, str(arg)):
        return getattr(value, arg)
    elif hasattr(value, 'has_key') and arg in value:
        return value[arg]
    elif numeric_test.match(str(arg)) and len(value) > int(arg):
        return value[int(arg)]


@register.filter
def get_org_style(request, section=None):
    """Retornar el objeto OrganizationStyle asociado al usuario."""
    organization_id = request.session.get('organization_id')
    organization = Organization.objects.filter(id=organization_id)
    org_style = OrganizationStyle.objects.filter(organization__in=organization)

    if section and org_style.count() == 1:
        org_style = org_style.first().__dict__.get(section)
    else:
        org_style = org_style.exists()
    return org_style


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
    organizations = Organization.objects.filter(id__in=organization_list)
    return organizations
