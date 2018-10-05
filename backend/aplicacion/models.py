from django.db import models

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
    nombres = models.CharField(max_length = 60)
    clave = models.CharField(max_length = 300)
    edad = models.IntegerField()

    def __str__(self):
        return self.nombres

class Puntaje(models.Model):
    codigo_usuario = models.ForeignKey(Usuario, on_delete = models.CASCADE)
    codigo_valor = models.ForeignKey(Valor, on_delete = models.CASCADE)
    puntuacion = models.IntegerField()

    def __str__(self):
        return str(self.puntuacion)
