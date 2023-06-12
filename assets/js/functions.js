function downloadPDF() {
    const link = document.createElement('a');
    link.href = 'assets/pdfs/JCV_2023_FEB.pdf';
    link.download = 'Tzortzakis_CV.pdf';
    link.target = '_blank'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }