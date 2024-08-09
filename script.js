     function sendEmail() {
            var email = document.getElementById("mail").value;
            var subject="request to connect";
            var body="I would like to connect with you";
            var mailtoLink = 'mailto:'+ email +'?subject=' + encodeURIComponent(subject) +'&body=' + encodeURIComponent(body)+"&cc=kevinshajigeorge30@gmail.com";
            window.location.href = mailtoLink;
     
        }