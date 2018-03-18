using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Patrol : MonoBehaviour {

    public Transform[] patrolPoints;
    private int currentPoint;
    public float moveSpeed;
    private bool reverse;

	// Use this for initialization
	void Start () {
        this.transform.position = patrolPoints[0].position;
        currentPoint = 0;
        reverse = false;
	}
	
	// Update is called once per frame
	void Update () {

        if (currentPoint > patrolPoints.Length - 1)
        {
            currentPoint = currentPoint - 2;
            reverse = true;
        }

        if (currentPoint < 0)
        {
            currentPoint += 2;
            reverse = false;
        }

        if (!reverse)
        {
            if (transform.position == patrolPoints[currentPoint].position)
            {
                currentPoint++;
            }
        }

        if(reverse)
        {
            if (this.transform.position == patrolPoints[currentPoint].position)
            {
                currentPoint--;
            }
        }
        if (currentPoint < patrolPoints.Length && currentPoint >= 0)
        {
            this.transform.position = Vector3.MoveTowards(this.transform.position, patrolPoints[currentPoint].position, moveSpeed * Time.deltaTime);
        }
	}
}
