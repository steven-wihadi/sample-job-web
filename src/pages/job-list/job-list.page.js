import './job-list.page.scss';
import Header from '../../shared/components/header/header.component';
import JobListToolbar from './component/job-list-toolbar/job-list-toolbar.component';
import { useEffect, useState } from 'react';
import { JobListService } from './job-list.service';

let isMaxData = false;
let totalData = 0;
let page = 1;

function JobListPage() {

  useEffect(() => {
    fetchData('', '', '', '');
  }, []);

  const [jobList, setJobList] = useState([]);

  const fetchData = (description, location, isFulltime, procedure) => {
    JobListService.useCase.getJoblist(description, location, isFulltime, page).then((res) => {
      if (res.status === 200) {
        const temp = [];
        res.data.forEach((item) => {
          if (item !== null) { temp.push(item); }
        });

        if (procedure === 'reset-list') { setJobList([...temp]); }
        else { setJobList([...jobList, ...temp]); }

        totalData = temp.length;
        if (totalData < 10) { isMaxData = true; }
        else { isMaxData = (totalData === 18) ? true : false; }
      }
    });
  }

  function onScroll(e) {
    if (e.target.scrollTop === e.target.scrollTopMax && !isMaxData) {
      page += 1;
      fetchData('', '', '', '');
    }
  };

  function onClickSearch(e) {
    page = 1;
    fetchData(e.desc, e.loc, (e.fullTime === false) ? '' : 'true', 'reset-list');
  }
  
  return (
    <div className="job-list-pages-container">
      <Header />
      <JobListToolbar onClickSearch={ onClickSearch } />
      
      <div className="job-list-content-wrapper">
        <div className="job-list" onScroll={onScroll}>
          <h2 className="job-list-content-title">Job List</h2>

          { jobList &&
            jobList.map((item) => 
            <div className="job-card" key={ item.id }>
              <div className="left-section">
                <a className="job-title" href={ '/job-detail/' + item.id }>{ item.title }</a>
                <span className="company-name">{ item.company } - <b className="job-type">{ item.type }</b></span>
              </div>

              <div className="right-section">
                <span className="job-country">{ item.location }</span>
                {/* <span className="job-published">1 day ago</span> */}
              </div>
            </div>
            )
          }

        </div>
      </div>
    </div>
  );
}

export default JobListPage;