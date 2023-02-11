


import random


class Player:

    # For this init method, we will be making our player. So our 'X' and 'O'.

    def __init__(self, letter):
        self.letter = letter

    # Want players to be able to get there next move

    def get_move(self, game):
        pass

    #  Using inheritance to make a computer player and a human player that builds on top of this player object ^^^^

class RandomComputerPlayer(Player):

    def __init__(self, letter):
        # Here we are calling the initialization in the super class --> Player Class
        super().__init__(letter)

    def get_move(self, game):
        # The AI's moveset is going to be randomized so anywhere that is available.
        square = random.choice(game.available_moves())
        return square

class HumanPlayer(Player):

     def __init__(self, letter):
         super().__init__(letter)

     def get_move(self, game): # We want the human to choose a spot.
         # Want the user to keep iterating until they reach a valid square

         valid_square = False
         val = None
         while not valid_square: # while valid_square is false
             square = input(self.letter + '\'s turn. Input move (0-8): ') # X's turn or O's turn
             # If spot is not available on the board, then we will say that spot is invalid
             # Same if correct value is not casted to an integer; then invalid
             # The integers correspond to the spots on the board.
             try:
                 val = int(square)
                 if val not in game.available_moves():
                     #Raising an except. In this case, we are defining valueerror
                     raise ValueError
                 valid_square = True # If successful, we're good
             except ValueError: # If not we except the ValueError
                 print("Invalid square. Try again!")

         return val




