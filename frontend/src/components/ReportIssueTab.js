import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reportIssue } from '../redux/actions';

const ReportIssueTab = () => {
    const [issue, setIssue] = useState('');
    const dispatch = useDispatch();

    const handleIssueChange = (e) => {
        setIssue(e.target.value);
    }

    const handleIssueSubmit = (e) => {
        e.preventDefault();
        dispatch(reportIssue(issue));
        setIssue('');
    }

    return (
        <div id="reportIssueTab">
            <h2>Report Issue</h2>
            <form onSubmit={handleIssueSubmit}>
                <textarea 
                    value={issue} 
                    onChange={handleIssueChange} 
                    placeholder="Describe the issue..."
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ReportIssueTab;