import React from 'react';
import ViewLayoutWrapper from '../Layout/ViewLayout/ViewLayoutWrapper';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    console.log("Error!", error, errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <ViewLayoutWrapper>
          <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
            <h2>Något blev fel...</h2>
            <p>Gå tillbaks till <a href="/krav4">startsidan</a>?</p>
          </div>
        </ViewLayoutWrapper>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorBoundary;