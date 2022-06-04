## To run
I would recommend using docker to run the application to minimize the risk of an unforseen situation with machine configurations.

On terminal, at the root of the project run: ```make run```

Open the browser, and use the following url: http://127.0.0.1:3000 (you should be forward to the dashboard url automatically)

To stop it, run in your terminal the following command: ```make kill```


# Data model

## Persisting user answers
To save users info in the database I would create table named user_answers with 3 columns:
1. question_id // FK - questions.id
2. user_id
3. answer

On the web side, I would create a function to generate a unique identifier for the session and save it as a cookie. For every answer the user would give, we would request a new API endpoint with the request body holding question_id, user_id, and the answer to record it in the newly created table user_answers.

## Changes in data model
I would adjust the options node in the question model. Instead of a string with all answers divided by a comma, an array with an option in each position would prevent data manipulation (splif of a string) on the frontend (cleaner code);

# Infrastructure
Choosing an infrastructure always needs to take several considerations. To name a few, business strategy (even its vision), resources, scalability and product strategies, even future technologic team, etc. All options are always worth discussing to understand and measure the impact in each business area.

For the sake of simplicity, I will take into consideration that:
 - We would be very resource-constrained;
 - We wanted to be lean;
 - To have the highest return of the implementation;
 - Gain speed to market;
 - Low infrastructure configuration time without compromising security;

I would propose deploying the system on Cloud Run from GCP in that situation. We would enable the deployment of applications in seconds using a docker configuration file. The service would manage the infrastructure resources depending on the incoming requests. It would add up more "servers" in the case of increasing usage and save costs on those "servers" if it was getting no accesses (saving some costs). In terms of security, the system would be exposed to the entry PORT we define in the code, and in terms of networking configuration, we could have a granular control if that would be required.

Looking for the perspective of being lean, as Cloud Run permits flexible automated infrastructure with minimal human interaction, engineers can shift the focus from maintaining the infrastructure to the maintenance and improvement of the product. This could be useful for many situations and areas mentioned at the beginning of the text.

# Backend
I would prepare the backend in Golang. As it would enable low setup effort, high flexibility, and scalability. I don't see the need to complicate the exercise, and a simple REST API would do the work. If we wanted to go a bit deeper in levels of engineering, maybe we could think of packaging the API by components as we only use 2 endpoints to consume information (quizzes and questions), and the non-existence of business logic here facilitates the implementation of the application core to bridge the presentation layer with the repository (i.e., the driven adapter).
