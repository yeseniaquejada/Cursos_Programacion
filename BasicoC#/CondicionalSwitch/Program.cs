using System;

namespace CondicionalSwitch
{
    class Program
    {
        static void Main(string[] args)
        {
            int totalJugador = 0;
            int totalDealer = 0;
            int num = 0;
            int coins = 0;
            string message = "";
            string controlOtraCarta = "";
            string switchControl = "menu";
            System.Random random = new System.Random();

            /*BlackJack, juntar 21 pidiendo cartas o en caso de tener menos de 21 igual
             tener mayor puntuacion que el dealer*/

            while (true)
            {
                Console.WriteLine("Bienvenido al CASINO");
                Console.WriteLine("Cuantos coins deseas? \n" +
                    "Ingresa un numero entero \n" +
                    "Recuerda que necesitas uno por ronda de juego");
                coins = int.Parse(Console.ReadLine());

                for (int i = 0; i < coins; i++)
                {
                    totalJugador = 0;
                    totalDealer = 0;

                    switch (switchControl)
                    {
                        case "menu":
                            Console.WriteLine("Escriba '21' para jugar al 21");
                            switchControl = Console.ReadLine();
                            i--;
                            break;

                        case "21":
                            do
                            {
                                num = random.Next(1, 12);
                                totalJugador = totalJugador + num;
                                Console.WriteLine("Toma tu carta, jugador \n" +
                                    $"Te salio el: {num}");
                                Console.WriteLine("¿Deseas otra carta?");
                                controlOtraCarta = Console.ReadLine();
                            }

                            while (controlOtraCarta == "Si" ||
                                   controlOtraCarta == "si" ||
                                   controlOtraCarta == "yes");

                            totalDealer = random.Next(12, 23);
                            Console.WriteLine($"El delaer tiene: {totalDealer}");
                            if (totalJugador > totalDealer && totalJugador < 22)
                            {
                                message = "Venciste al dealer, felicidades";
                                switchControl = "menu";
                            }
                            else if (totalJugador <= totalDealer)
                            {
                                message = "Perdiste vs el dealer, lo siento";
                                switchControl = "menu";
                            }
                            else if (totalJugador >= 22)
                            {
                                message = "Perdiste vs el dealer, lo siento, te pasaste de 21";
                                switchControl = "menu";
                            }
                            else
                            {
                                message = "Condicion no valida";
                            }

                            Console.WriteLine(message);
                            break;

                        default:
                            Console.WriteLine("Valor ingresado no válido");
                            break;
                    }                   
                }
            }
        }
    }
}
