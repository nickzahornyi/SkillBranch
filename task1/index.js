var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZDMwMTJmYjc0ZDAwMTFiZTdkM2EiLCJ1c2VybmFtZSI6Im5pY2tfc3VydmV5b3JAdWtyLm5ldCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNDc4MDIxODkwfQ.AQsp3_54ogLBh2EnxVKbbPRyKzWZSL_hNtiwI_SlkYw';
var skb = new Skb(token);
skb.taskHelloWorld('Hello world!');
