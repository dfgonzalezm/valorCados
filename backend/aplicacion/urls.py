from django.conf.urls import url
from aplicacion import views

urlpatterns = [
    url(r'^usuarios/$' , views.UsuarioList.as_view()),
    url(r'^usuarios/(?P<pk>[ 0-9] +) /$' , views.UsuarioDetail.as_view()),

    url(r'^categorias/$' , views.CategoriaList.as_view()),
    url(r'^categorias/(?P<pk>[ 0-9] +) /$' , views.CategoriaDetail.as_view()),
]