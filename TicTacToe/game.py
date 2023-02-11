import time

from player import RandomComputerPlayer, HumanPlayer

class TicTacToe:

    def __init__(self):
        # A list of length 9 that would represent 3x3 board
        self.board = [' ' for _ in range(9)]
        self.current_winner = None # Keep track if there is a winner!

    def print_board(self):
        # For getting the rows
        for row in [self.board[i*3:(i+1)*3] for i in range(3)]:
            #Puts the lines that construct the rows and columns
             print('|', ' | '.join(row) + ' |')


    @staticmethod # because it don't relate to any specific board and don't have to pass a self
    def print_board_nums():
        # 0 | 1 | 2 ---> tells us what number corresponds to what board
        number_board = [[str(i) for i in range(j*3, (j+1)*3)] for j in range(3)]
        for row in number_board:
            print('|', ' | '.join(row) + ' |')

    def empty_squares(self):
        return ' ' in self.board

    def num_empty_squares(self):
         return self.board.count(' ')

    def make_move(self, square, letter): # What square they want their move on including the letter of the player
        if self.board[square] == ' ':
            self.board[square] = letter # Here the letter is being assigned to the square
            if self.winner(square, letter):
                self.current_winner = letter # --> States who the winner is after going on specific square including the player
            return True
        return False

    def winner(self, square, letter):
        # winner if 3 in a row everywhere. Have to check all directions
        #For row:
        row_ind = square // 3
        row = self.board[row_ind*3: (row_ind + 1) * 3]
        if all([spot == letter for spot in row]):
            return True

        # check columns
        col_ind = square % 3
        column = [self.board[col_ind+i*3] for i in range(3)]
        if all([spot == letter for spot in column]):
            return True

        # check diagnols
        # basically checking even numbers on the board [0, 2, 4, 6, 8]
        if square % 2 == 0:
            diagonal1 = [self.board[i] for i in [0, 4, 8]] # Left-right diagonal
            if all([spot == letter for spot in diagonal1]):
                return True
            diagonal2 = [self.board[i] for i in [2, 4, 6]]  # Right-left diagonal
            if all([spot == letter for spot in diagonal2]):
                return True





    def available_moves(self):
        # Logic of game, representing empty space with the space, available moves after a move
        moves = []
        for (i,spot) in enumerate(self.board):
            # enumerate() ---> [(0, 'x'), (1, 'x'), (2, 'o')]
            if spot == ' ':
                moves.append(i)
        return moves

def play(game, x_player, o_player, print_game=True):
    # returns winner of the game(the letter). Or none if it's a tie
    if print_game:
        game.print_board_nums()

    letter = 'X' # Starting player
    # We want to iterate while the game has empty squares.
    while game.empty_squares():
        # Get move from the appropriate player
        if letter == 'O':
            square = o_player.get_move(game)
        else:
            square = x_player.get_move(game)

    # Now we can make a method that makes a move!

        if game.make_move(square, letter): # If method is True. So if someone make a move
            if print_game:
                print (letter + f" makes a move to square {square}. ")
                game.print_board()
                print('') # New line for space

            if game.current_winner:
                if print_game:
                    print(letter + ' wins!')
                return letter


            # After a move we must alternate in between players

            if letter == 'X':
                letter = 'O'
            else:
                letter = 'X'
        # tiny break to make things easier to read
        time.sleep(0.8)

    if print_game:
        print('It\'s a tie!')

if __name__ == '__main__':
    x_player = HumanPlayer('X')
    o_player = RandomComputerPlayer('O')
    t = TicTacToe()
    play(t, x_player, o_player, print_game=True) # Added t as argument when calling play method. t is our game





