=====
Usage
=====

To use rinno_material in a project, add it to your `INSTALLED_APPS`:

.. code-block:: python

    INSTALLED_APPS = (
        ...
        'rinno_material.apps.RinnoMaterialConfig',
        ...
    )

Add rinno_material's URL patterns:

.. code-block:: python

    from rinno_material import urls as rinno_material_urls


    urlpatterns = [
        ...
        url(r'^', include(rinno_material_urls)),
        ...
    ]
