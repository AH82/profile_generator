const questionsList =
["What's your name?",
"What's an activity you like doing?",
"What do you listen to while doing that?",
"Which meal is your favourite?",
"What's your favourite thing to eat for that meal?",
"Which sport is your absolute favourite?",
"What is your superpower?"];

let answersList = [];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question(questionsList[0]+'\n', (answer) => {
  // TODO: Log the answer in a database
  answersList.push(answer);
  console.log(`Thank you for your valuable feedback: ${answer}`);


  rl.question(questionsList[1]+'\n', (answer) => {
    // TODO: Log the answer in a database
    answersList.push(answer);
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question(questionsList[2]+'\n', (answer) => {
      // TODO: Log the answer in a database
      answersList.push(answer);
      console.log(`Thank you for your valuable feedback: ${answer}`);
    
      rl.question(questionsList[3]+'\n', (answer) => {
        // TODO: Log the answer in a database
        answersList.push(answer);
        console.log(`Thank you for your valuable feedback: ${answer}`);
      
        rl.question(questionsList[4]+'\n', (answer) => {
          // TODO: Log the answer in a database
          answersList.push(answer);
          console.log(`Thank you for your valuable feedback: ${answer}`);
        
          rl.question(questionsList[5]+'\n', (answer) => {
            // TODO: Log the answer in a database
            answersList.push(answer);
            console.log(`Thank you for your valuable feedback: ${answer}`);
          
            rl.question(questionsList[6]+'\n', (answer) => {
              // TODO: Log the answer in a database
              answersList.push(answer);
              console.log(`Thank you for your valuable feedback: ${answer}`);
              console.log(`${answersList[0]} loves listening to ${answersList[2]} while ${answersList[1]}, devouring ${answersList[4]} for ${answersList[3]}, prefers ${answersList[5]} over any other sport, and is amazing at ${answersList[6]} at inopportune times.`);

              rl.close();
            });
            // rl.close();
          });
          // rl.close();
        });
        // rl.close();
      });
      // rl.close();
    });
    // rl.close();
  });
  // rl.close();
});