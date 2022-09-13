const { Console } = require('console')
const readline = require('readline')
var rl = readline.createInterface(process.stdin, process.stdout)
rl.question('Enter Your Name : ', name =>
{
    rl.question('Enter Your Age : ', age =>
    {
        rl.question('Enter Your Email Id : ', email =>
        {
            rl.question('Enter Your Mobile No. : ', mobile =>
            {
                if (age < 18)
                {
                    var ag = 18 - age
                    console.log("Minimum required 18 years and your age is " + age + ", You should wait at least " + ag + " year(s) more.")
                }
                else {
                    console.log("Great " + name + " you can sign in.\nUser Name : " + name + "\nAge : "+age+" \nEmail ID : " + email + "\nMobile : " + mobile)
                }
                process.exit()
            })
        })
    })
})