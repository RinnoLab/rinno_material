=============================
rinno_material
=============================

.. image:: https://badge.fury.io/py/rinno_material.svg
    :target: https://badge.fury.io/py/rinno_material

.. image:: https://travis-ci.org/guslalo/rinno_material.svg?branch=master
    :target: https://travis-ci.org/guslalo/rinno_material

.. image:: https://codecov.io/gh/guslalo/rinno_material/branch/master/graph/badge.svg
    :target: https://codecov.io/gh/guslalo/rinno_material

Django package for a material design admin

Documentation
-------------

The full documentation is at https://rinno_material.readthedocs.io.

Quickstart
----------

Install rinno_material::

    pip install rinno_material

Add it to your `INSTALLED_APPS`:

.. code-block:: python

    INSTALLED_APPS = (
        ...
        'rinno_material',
        ...
    )

Add it to your `MIDDLEWARE`:

.. code-block:: python

    MIDDLEWARE = (
        ...
        'rinno_material.middleware.RinnoMaterialMiddleware',
    )

Add rinno_material's URL patterns:

.. code-block:: python

    from rinno_material import urls as rinno_material_urls


    urlpatterns = [
        ...
        url(r'^', include(rinno_material_urls)),
        ...
    ]

Features
--------

* TODO

Running Tests
-------------

Does the code actually work?

::

    source <YOURVIRTUALENV>/bin/activate
    (myenv) $ pip install tox
    (myenv) $ tox

Credits
-------

Tools used in rendering this package:

*  Cookiecutter_
*  `cookiecutter-djangopackage`_

.. _Cookiecutter: https://github.com/audreyr/cookiecutter
.. _`cookiecutter-djangopackage`: https://github.com/pydanny/cookiecutter-djangopackage
