using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour {

    public static int currentScore;
    public static int highScore;
    public static int currentLevel = 0;
    public static int unlockedLevel;

    public static void CompleteLevel()
    {
        if (currentLevel < 2)
        {
            
            currentLevel += 1;
            print("Current level is: " + currentLevel);
            Application.LoadLevel(currentLevel);
        }
        else
        {
            print("You win");
        }
    }

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}
