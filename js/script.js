{
    const playGame = function(playerInput){

        console.log(playGame);

        clearMessages();

        const getMoveName = function(argMoveId){
            if(argMoveId == 1){
            return 'kamień';
            }
            else if(argMoveId == 2){
                return 'papier';
            }
            else if(argMoveId == 3){
                return 'nożyce';
            }
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }

        const randomNumber = Math.floor(Math.random() * 3 + 1),
            argComputerMove = getMoveName(randomNumber),
            argPlayerMove = getMoveName(playerInput);

        console.log('Wylosowana liczba to: ' + randomNumber);
        console.log('Gracz wpisał: ' + playerInput);
        console.log('moves:', argComputerMove, argPlayerMove);


        const displayResult = function(argComputerMove, argPlayerMove){
            printMessage('Mój ruch to: ' + argComputerMove);
            printMessage('Twój ruch to: ' + argPlayerMove);

            if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                printMessage ('Ty wygrywasz!');
            } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                printMessage ('Ty przegrywasz!');
            } else if( argComputerMove ==  argPlayerMove){
                printMessage ('Remis!');
            } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage ('Ty wygrywasz!');
            } else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                printMessage ('Ty przegrywasz!');
            } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                printMessage ('Ty przegrywasz!');
            } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage ('Ty wygrywasz!');
            } else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
                printMessage ('Nieznany ruch!');
            } else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
                printMessage ('Nieznany ruch!');
            } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
                printMessage ('Nieznany ruch!');
            }
        }

        displayResult(argComputerMove, argPlayerMove)
        console.log(displayResult)

}


document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });

document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });
}