import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function MakePdf() {
  async function pdfExport() {
    const paper = document.querySelector(".pdfWrapper") as HTMLElement;
    const canvas = await html2canvas(paper, { scale: 5, useCORS: true });
    const imageFile = canvas.toDataURL("image/png", 1.0);
    const doc = new jsPDF("p", "mm", "a4", true);

    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pageHeight = imgWidth * 1.414; // a4 기준

    let heightLeft = imgHeight;
    let position = 0;

    doc.addImage(
      imageFile,
      "JPEG",
      10,
      position,
      imgWidth,
      imgHeight,
      undefined,
      "FAST",
    );
    heightLeft -= pageHeight;

    // 한 페이지 이상일 경우
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;

      doc.addPage();
      doc.addImage(
        imageFile,
        "JPEG",
        10,
        position,
        imgWidth,
        imgHeight,
        undefined,
        "FAST",
      );
      heightLeft -= pageHeight;
    }
    window.open(doc.output("bloburl"));

    const pdf = new File([doc.output("blob")], "DontWorry.pdf", {
      type: "application/pdf",
    });

    doc.save("DontWorry.pdf");
    return { pdf, imageFile };
  }

  return {
    viewWithPdf: async () => {
      const imageFile = await pdfExport();
      return imageFile;
    },
  };
}

export default MakePdf;
