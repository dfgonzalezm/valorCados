from django.contrib import admin
from .models import Categoria, Valor, Usuario, Puntaje

# Register your models here.
admin.site.register(Categoria)
admin.site.register(Valor)
admin.site.register(Usuario)
admin.site.register(Puntaje)