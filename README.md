# tpCiclista
Programa de registro de los circuitos recorridos por un Ciclista


### TSSI - Laboratorio de Programación I

# Trabajo Práctico

- Ciclista -
1er Cuatrimestre - 2021


## Introducción

Un ciclista desea obtener una aplicación que le permitaobtener datos estadísticos sobre sus
entrenamientos con el fin de mejorar en su actividad.

El ciclista nos cuenta que registra una cantidad aleatoriade vueltas, que elige también de forma
aleatoria, de las 20 vueltas que realiza en cada entrenamiento.


# De cada vuelta siempre se conoce:

● Su posición (primera vuelta, segunda vuelta, etc)
● Su duración, expresada como un número entero en el formato MMSS
(minutos,segundos)


También se conoce la extensión de la vuelta expresada en Km, para todas las vueltas es la
misma ya que el ciclista realiza los entrenamientos en un circuito cerrado.


# Etapa 1

### Desarrollar una aplicación que permita al ciclista:

**a.** Cargar los datos de las vueltas seleccionadas. Se debe poder cargar los datos de una
cantidad arbitraria de vueltas determinada por el ciclista.

**b.** Cuál fue, de las ingresadas, la vuelta más rápida y su tiempo.

**c.** Cuál fue, de las ingresadas, la vuelta más lenta y su tiempo.

**d.** Cuál fue la velocidad media, expresada en m/s. (Vm= distancia / Tmax - Tmin)


# Etapa 2

En esta nueva etapa, el ciclista desea realizar algunos cambios a la aplicación.

Ahora el ciclista desea poder registrar las 20 vueltas, aunque nos avisa que no siempre se
cargan en orden de ocurrencia. Por lo que uno de sus primeros requerimientos es poder ver un
listado con la información de cada vuelta ordenadas según su orden de ocurrencia.
Otro de los requerimientos para esta nueva etapa es poder registrar la fecha del entrenamiento.

Por otra parte, nos solicita poder visualizar un listado de todas las vueltas cuya velocidad
supera la velocidad media del entrenamiento. Tener en cuenta que al disponer de todas las
vueltas del entrenamiento, el cálculo de la velocidad media será: Vm = distancia / Tfin - Tini

Adicionalmente el ciclista desea poder ingresar el número de una vuelta y poder obtener toda su
información (orden, tiempo, fecha, velocidad media de la vuelta).


# Etapa 3

En la etapa final, nuestro amigo ciclista desea volver a modificar la aplicación una vez más. En
este caso, quiere poder registrar los entrenamientos realizados en todo 1 mes y obtener datos
de todo el mes de entrenamiento.
El ciclista desea que luego de cargar los datos de todo el mes de entrenamiento, la aplicación
tenga la capacidad de indicarle:


**a.** Cúal fue el entrenamiento con la vuelta más rápida y su tiempo. Debe mostrar también
los datos de la vuelta correspondiente

**b.** Cúal fue el entrenamiento con la vuelta más lenta y su tiempo.

