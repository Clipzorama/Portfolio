//
//  ViewController.swift
//  Midterm 1
//
//  Created by Chrision Wynaar on 10/7/22.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet var guessField: UITextField!
    @IBOutlet var guessLabel: UILabel!
    @IBOutlet var possGuess: UILabel!
    
    @IBAction func dismissKeyboard(_ sender: UITapGestureRecognizer) {
        guessField.resignFirstResponder()
    }
    
    var number = Int.random(in:1...100)
    var numGuess: Int = 5

    
    @IBAction func check(_ sender: UIButton) {
        let guess = Int(guessField.text!) ?? . zero
        


        if guess != number {
           possGuess.text = "You have \(numGuess - 1) guesses left."
            // From here I have to change the numGuess value but a little puzzled on here specifically
       }
        
        if guess > number {
            guessLabel.text = "Your guess is too high."
            possGuess.text = "You have \(numGuess - 1) guesses left."
            // Same here
        }
        
         if guess < number {
            guessLabel.text = "Your guess is too low."
             possGuess.text = "You have \(numGuess - 1) guesses left."
             // Same here

            
        }
        
         if guess == number {
            guessLabel.text = "Your guess is correct!"
            possGuess.text = "Game Over."
        }
        
       
        
         if numGuess == 0 {
            guessLabel.text = "You ran out of guesses!"
            possGuess.text = "Game Over."
        }
        
    }
    
    @IBAction func startOver(_ sender: UIButton) {
        guessField.text = ""
        numGuess = 5
        guessLabel.text = "Guess a number between 1 and 100"
        possGuess.text = "You have \(numGuess) guesses left."
        number = Int.random(in:1...100)

    }
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


}

