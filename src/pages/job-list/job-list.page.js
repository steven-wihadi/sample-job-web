import './job-list.page.scss';
import Header from '../../shared/components/header/header.component';
import JobListToolbar from './component/job-list-toolbar/job-list-toolbar.component';
import { useEffect } from 'react';

function JobListPage() {

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = () => {
  //   fetch('http://dev3.dansmultipro.co.id/api/recruitment/positions.json?page=1').then((res) => {
  //     console.log('==res: ', res);
  //   });
  // }
  
  return (
    <div className="job-list-pages-container">
      <Header />
      <JobListToolbar />
      
      <div className="job-list-content-wrapper">
        <div className="job-list">
          <h2 className="job-list-content-title">Job List</h2>

          <div className="job-card">
            <div className="left-section">
              <h3 className="job-title">Data Enginer</h3>
              <span className="company-name">Trade Republic - <b className="job-type">Full Time</b></span>
            </div>

            <div className="right-section">
              <span className="job-country">Berlin</span>
              <span className="job-published">1 day ago</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default JobListPage;