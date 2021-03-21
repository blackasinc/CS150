import React from 'react';
import loadingGif from '../resources/loading.gif';
import splitsheetToPdf from '../helper/splitsheetToPdf';

class PdfDownloadButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pdfUrl: null
    };
    this.blobStream = splitsheetToPdf(this.props.splitsheet);
  }

  componentDidMount() {
    this.blobStream.on('finish', () => {
      this.setState({ pdfUrl: this.blobStream.toBlobURL('application/pdf') })
    });
  }

  render() {
    if (this.state.pdfUrl == null) {
      return (
        <img src={loadingGif} alt='Generating PDF' />
      );
    } else {
      return (
        <a href={this.state.pdfUrl} download='my_splitsheet.pdf'>Click to download PDF</a>
      )
    }
  }
}

export default PdfDownloadButton;
