# Wordle Unlimited

This is a simple wordle clone using CRA and tailwind. I used HeadlessUI for toggle and modal components. 

This was my first time using tailwind on a full project and I was really impressed with a) how much faster it is to get something up and running and b) how easy it is to make something simple and responsive for mobile. 

[Live Preview](https://rypmaloney.github.io/wordle-unlimited/)

This project runs on an Express API ([Wordle-API](https://github.com/rypmaloney/wordle-api)) using a Postgres database. The main motivation of this API is threefold: 
1. Create a DB that has many commonly guessed words to quickly query without having to always use an external service. 
2. Populate a 5 letter word game list that has reasonable words and is dynamically updated based on user guessses.
3. Track as much information as possible related to games played to create a robust and useable Postgres db I can query. 


