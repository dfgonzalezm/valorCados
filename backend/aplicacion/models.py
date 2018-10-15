from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Categoria(models.Model):
    nombre = models.CharField(max_length = 60)

    def __str__(self):
        return self.nombre

class Valor(models.Model):
    nombre = models.CharField(max_length = 45)
    puntos = models.IntegerField()
    codigo_categoria = models.ForeignKey(Categoria, on_delete = models.CASCADE)

    def __str__(self):
        return self.nombre

class Usuario(models.Model):
    # Relacionar el campo de la tabla auth_user de django con nuestra tabla usuario
    user = models.OneToOneField(User, on_delete = models.CASCADE, blank = True, null = True)
    nombres = models.CharField(max_length = 60)
    apellidos = models.CharField(max_length = 60, blank = True, null = True)
    clave = models.CharField(max_length = 300)
    fecha_nacimiento = models.DateField(blank = True, null = True)
    # perfil = models.TextField(max_length = 500, blank = True)

    def __str__(self):
        return self.nombres

class Puntaje(models.Model):
    codigo_usuario = models.ForeignKey(Usuario, on_delete = models.CASCADE)
    codigo_valor = models.ForeignKey(Valor, on_delete = models.CASCADE)
    puntuacion = models.IntegerField()

    def __str__(self):
        return str(self.puntuacion)
