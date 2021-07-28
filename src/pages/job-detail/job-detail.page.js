import './job-detail.page.scss';
import { useParams } from "react-router-dom";
import Header from '../../shared/components/header/header.component';
import { JobDetailService } from './job-detail.service';
import { useEffect, useState } from 'react';

function JobDetailPage() {

  const jobId = useParams().id;
  const [jobDetail, setJobDetail] = useState(null);

  useEffect(() => {
    JobDetailService.usecase.getJobDetail(jobId).then((res) => {
      if (res.status === 200) {
        setJobDetail(res.data);
      }
    });
  }, []);

  function getDescription() {
    return {__html: jobDetail.description};
  }

  function getHowToApply() {
    return {__html: jobDetail.how_to_apply};
  }

  return (
    <div className="job-detail-pages-container">
      <Header />
      { jobDetail &&
        <div className="job-detail-wrapper">
          <a className="back-button" href="/job-list">Back</a>

          <div className="job-detail-content-wrapper">
            <div className="job-title">
              <span className="job-type-and-location">{ jobDetail.type } / { jobDetail.location }</span>
              <h2 className="title-text">{ jobDetail.title }</h2>
            </div>

            <div className="job-content">
              <div className="left-side">
                <div dangerouslySetInnerHTML={ getDescription() } />
              </div>

              <div className="right-side">
                <div className="company-info">
                  <span className="company-name">{ jobDetail.company }</span>
                  <div className="image-wrapper">
                    <img src={ jobDetail.company_logo } />
                  </div>
                  <a className="company-link" href={ jobDetail.company_url }>{ jobDetail.company_url }</a>
                </div>

                <div className="how-to-apply-section">
                  <span className="how-to-apply-text">How To Apply</span>
                  <div className="how-to-apply-content" dangerouslySetInnerHTML={ getHowToApply() }></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default JobDetailPage;