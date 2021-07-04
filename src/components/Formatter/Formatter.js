import React from "react";
import {Card, message} from 'antd';
import "./Formatter.scss";
import FormatterForm from "./FormatterForm/FormatterForm";
import BranchNameFormatter from "../../domain/branchNameFormatter";
import OutputCard from "./OutputCard/OutputCard";

class Formatter extends React.Component {
    branchNameFormatter = new BranchNameFormatter();
    
    constructor(props) {
        super(props);
        
        this.state = {
            formattingResult: ""
        };
    }

    render() {
        return (
            <div className="formatter">
                <div className="formatter_content">
                    <FormatterForm onSubmit={this.onFormSubmit}/>
                    <OutputCard title="Branch name" content={this.state.formattingResult}/>
                    <OutputCard title="Git command" content={this.getGitCommand()}/>
                </div>     
            </div>
        )
    }
    
    onFormSubmit = (form) => {
        const formattedBranchName = this.branchNameFormatter.getFormattedBranchName(
            form.taskId,
            form.taskTitle,
            form.taskType
        );

        this.setState({formattingResult: formattedBranchName});
    }
    
    getGitCommand = () => {
        if (!this.state.formattingResult) {
            return "";
        }
        
        return `git checkout -b "${this.state.formattingResult}"`;
    }
}

export default Formatter;