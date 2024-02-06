function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/pdfs/cvFEB2024.pdf';
    link.download = 'Tzortzakis_CV.pdf';
    link.target = '_blank'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  function sendEmail() {
    // AJAX request to the PHP file
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert(this.responseText);
        }
    };
    xhttp.open("GET", "send_email.php", true);
    xhttp.send();
}
