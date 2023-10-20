function sendEmail() {
  var message = ["boiko@rcit.ukr.education",
                 "Відправка повідомлення тригером",
                 "Це повідомлення відправлено тригером о 17:12. Час створення тригеру 17:08"]
  MailApp.sendEmail(message[0],message[1],message[2])        
}


function setCustomTrigger() 
{
  var targetDate = new Date('2023-10-20 17:12:00');
  var trigger = ScriptApp.newTrigger("sendEmail")
    .timeBased()
    .at(targetDate)
    .create();
}


function myFunction() {
  setCustomTrigger()
  sendEmail()
}
