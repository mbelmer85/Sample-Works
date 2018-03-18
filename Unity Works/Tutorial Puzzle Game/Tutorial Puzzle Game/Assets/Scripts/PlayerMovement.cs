using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour {

    public float moveSpeed;
    public GameObject deathParticles;

    private Vector3 input;
    private Rigidbody rigid;
    private float maxSpeed = 10f;
    private Vector3 spawn;
    

	// Use this for initialization
	void Start () {
        rigid = GetComponent<Rigidbody>();
        spawn = transform.position;
	}
	
	// Update is called once per frame
	void Update () {
        input = new Vector3(Input.GetAxisRaw("Horizontal"), 0, Input.GetAxisRaw("Vertical"));
        if (rigid.velocity.magnitude < maxSpeed)
        {
            rigid.AddForce(input * moveSpeed);
        }

        if(this.transform.position.y < -.75f)
        {
            Die();
        }
        
	}

    private void OnCollisionEnter(Collision other)
    {
        if(other.transform.tag == "Enemy")
        {

            Die();
            
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if(other.transform.tag == "Goal")
        {
            GameManager.CompleteLevel();
        }
    }

    void Die()
    {
        Instantiate(deathParticles, transform.position, Quaternion.identity);
        this.transform.position = spawn;
    }
}
