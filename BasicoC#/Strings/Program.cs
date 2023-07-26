using System;

namespace Strings
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ricardo perez ID: ");
            int altura = 168;
            int edad = 89;
            string nombre = "Ricardo Perez";
            string informacion = "Nacio en Hidalgo, es estudiante de gastronomia";
            var hobby = "Deportista";

            string tarjetaIdentificacion = $"La informacion de {nombre}, es la siguiente: \n" +
                $"Su edad es: {edad} \nSu altura es: {altura} cm \nInformación relevante: {informacion} \n" +
                $"Su hobby es: {hobby}";

            Console.WriteLine(tarjetaIdentificacion);
        }
    }
}
