class BranchNameFormatter {
    getFormattedBranchName = (taskId, taskTitle, taskType) => {
        const formattedTaskTitle = this.getFormattedTaskTitle(taskTitle);
        return `${taskType}/${taskId}_${formattedTaskTitle}`;
    };
    
    getFormattedTaskTitle = (taskTitle) => {
        return taskTitle
            .trim()
            .replace(/\B(?:([A-Z])(?=[a-z]))|(?:(?<=[a-z0-9])([A-Z]))/g, '-$1$2')
            .replaceAll(" ", "-")
            .replaceAll("\"", "")
            .replaceAll("'", "")
            .toLowerCase();
    };
}

export default BranchNameFormatter;