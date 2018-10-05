from django.shortcuts import render
from django.shortcuts import render_to_response

# Create your views here.

# Esta función se encargará de redirigir a la página principal.html
def principal(request):
    return render_to_response("principal.html")
