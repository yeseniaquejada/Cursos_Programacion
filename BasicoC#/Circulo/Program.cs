using System;

namespace Circulo
{
    class Program
    {
        static void Main(string[] args)
        {
            var radio = 0d;
            var resultado = 0d;
            const double Pi = 3.14;
            Console.WriteLine("Bienvenido, calculemos círculos!");
            //Pi*radio*radio
            Console.WriteLine("Ingrese el valor del radio: ");
            radio = Convert.ToDouble(Console.ReadLine());
            resultado = Pi * radio * radio;
            Console.WriteLine($"El área de tu circulo es de: {resultado}");

        }
    }
}
