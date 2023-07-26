using System;

namespace CondicionalIF
{
    class Program
    {
        static void Main(string[] args)
        {
            int totalJugador = 28;
            int totalDealer = 15;
            string message = "";

            /*BlackJack, juntar 21 pidiendo cartas o en caso de tener menos de 21 igual
             tener mayor puntuacion que el dealer*/
            if (totalJugador > totalDealer && totalJugador < 22)
            {
                message = "Venciste al dealer, felicidades"; 
            } 
            else if (totalJugador <= totalDealer)
            {
                message = "Perdiste vs el dealer, lo siento";
            } 
            else if (totalJugador >= 22)
            {
                message = "Perdiste vs el dealer, lo siento, te pasaste de 21";
            }
            else
            {
                message = "Condicion no valida";
            }

            Console.WriteLine(message);
        }
    }
}
