import React from 'react';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, useSubmit, Link, useSearchParams } from 'react-router-dom';
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from '../../../utils/constants';

// FormRow Component
const FormRow = ({ type, name, labelText, defaultValue }) => {
    return (
        <div className='form-row'>
            {labelText && <label htmlFor={name} className='form-label'>{labelText}</label>}
            <input type={type} name={name} id={name} className='form-input' defaultValue={defaultValue} />
        </div>
    );
};

// FormRowSelect Component
const FormRowSelect = ({ labelText, name, list, defaultValue }) => {
    return (
        <div className='form-row'>
            {labelText && <label htmlFor={name} className='form-label'>{labelText}</label>}
            <select name={name} id={name} className='form-select' defaultValue={defaultValue}>
                {list.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

// Submit Button Component
const SubmitBtn = ({ formBtn }) => {
    return (
        <button type='submit' className={`btn ${formBtn ? 'form-btn' : ''}`}>
            Search
        </button>
    );
};

const SearchContainer = () => {
    const submit = useSubmit();
    const [searchParams] = useSearchParams();

    // Retrieve existing query params for persistence
    const search = searchParams.get('search') || '';
    const jobStatus = searchParams.get('jobStatus') || 'all';
    const jobType = searchParams.get('jobType') || 'all';
    const sort = searchParams.get('sort') || 'newest';

    return (
        <Wrapper>
            <Form className='form' onChange={(e) => submit(e.currentTarget)}>
                <h5 className='form-title'>Search Jobs</h5>
                <div className='form-center'>
                    {/* Search Position */}
                    <FormRow type='search' name='search' labelText='Search' defaultValue={search} />

                    {/* Job Status Dropdown */}
                    <FormRowSelect
                        labelText='Job Status'
                        name='jobStatus'
                        list={['all', ...Object.values(JOB_STATUS)]}
                        defaultValue={jobStatus}
                    />

                    {/* Job Type Dropdown */}
                    <FormRowSelect
                        labelText='Job Type'
                        name='jobType'
                        list={['all', ...Object.values(JOB_TYPE)]}
                        defaultValue={jobType}
                    />

                    {/* Sorting Options */}
                    <FormRowSelect
                        name='sort'
                        labelText='Sort By'
                        defaultValue={sort}
                        list={[...Object.values(JOB_SORT_BY)]}
                    />

                    {/* Reset Button */}
                    <Link to='/dashboard/all-jobs' className='btn form-btn delete-btn'>
                        Reset Search Values
                    </Link>

                    {/* Submit Button */}
                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );
};

export default SearchContainer;
