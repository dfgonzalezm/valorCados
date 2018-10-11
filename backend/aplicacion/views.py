from django.shortcuts import render
from django.shortcuts import render_to_response

from rest_framework.decorators import permission_classes
from aplicacion.models import Usuario
from aplicacion.serializers import UsuarioSerializer
from aplicacion.permissions import IsPostOrIsAuthenticated
from rest_framework import generics

# Create your views here.
@permission_classes((IsPostOrIsAuthenticated, ))
class UsuarioList(generics.ListCreateAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

# Esta función se encargará de redirigir a la página principal.html
def principal(request):
    return render_to_response("principal.html")
