import React from "react";
import {Card, message} from "antd";

class OutputCard extends React.Component {
    render() {
        return (
            <Card title={this.props.title} extra={this.renderCopyToClipboard()}>
                {this.props.content}
            </Card>
        )
    }

    renderCopyToClipboard = () => {
        return <a href="#" onClick={this.onCopyClick}>Copy</a>;
    }

    onCopyClick = (event) => {
        event.preventDefault();

        navigator.clipboard.writeText(this.props.content)
            .then(() => message.success(`${this.props.title} copied to the clipboard`))
            .catch(() => message.error(`Copy ${this.props.title} error`));
    }
}

export default OutputCard;