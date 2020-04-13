var nodemailer = new require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anunezmartinez@danielcastelao.org',
      pass: '********'
    }
  });
  
  var mailOptions = {
    from: 'anunezmartinez@danielcastelao.org',
    to: 'damian@danielcastelao.org',
    subject: 'Sending Email using Node.js',
    text: 'This email was sent using node.js and nodemailer.'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });