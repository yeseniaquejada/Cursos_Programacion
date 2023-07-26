using System;

namespace OperadoresLogicos
{
    class Program
    {
        static void Main(string[] args)
        {
            var (valor1, valor2, valor3) = (true, true, false);

            bool resultadoAnd = valor1 && valor2 && valor3;
            Console.WriteLine(resultadoAnd);

            bool resultadoOr = valor1 || valor2 || valor3;
            Console.WriteLine(resultadoOr);

            bool resultadoAndOr = (valor1 && valor2) || valor3;
            Console.WriteLine(resultadoAndOr);

            bool resultadoNot = !valor1;
            Console.WriteLine(resultadoNot);

            bool resultadoXor = valor1 ^ valor2 ^ valor3;
            Console.WriteLine(resultadoXor);
        }
    }
}
