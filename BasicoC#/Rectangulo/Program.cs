using System;

namespace Rectangulo
{
    class Program
    {
        static void Main(string[] args)
        {
            //Programa que calcula el área de un rectángulo
            var ladoA = 0d;
            var ladoB = 0d;
            var resultado = 0d;

            Console.WriteLine("Calcula el área de un rectángulo");
            Console.WriteLine("Ingrese el valor del lado A");
            ladoA = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Ingrese el valor del lado B");
            ladoB = Convert.ToDouble(Console.ReadLine());

            resultado = ladoA * ladoB;
            Console.WriteLine($"El lado A es: {ladoA}" + $" El lado B es:  {ladoB}" + $" El resultado es: {resultado}");
        }
    }
}
