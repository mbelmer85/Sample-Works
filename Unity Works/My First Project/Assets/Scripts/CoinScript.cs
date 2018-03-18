using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CoinScript : MonoBehaviour {

    private LevelManager gameLevelManager;
    public int coinValue;

	// Use this for initialization
	void Start () {
        gameLevelManager = FindObjectOfType<LevelManager>();
	}
	
	// Update is called once per frame
	void Update () {
		
	}

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.tag == "Player")
        {
            gameLevelManager.AddCoins(coinValue);
            Debug.Log("Your score is: " + gameLevelManager.coins);
            Destroy(gameObject);
        }
    }
}
