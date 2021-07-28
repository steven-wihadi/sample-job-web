import './job-list-toolbar.component.scss';

function JobListToolbar() {
  return (
    <div className="job-list-toolbar-component">
      <div className="job-desc-section">
        <label className="toolbar-label">Job Description</label>
        <input className="toolbar-input" type="text"/>
      </div>

      <div className="job-location-section">
        <label className="toolbar-label">Location</label>
        <input className="toolbar-input" type="text"/>
      </div>

      <div className='fulltime-section'>
        <input type="checkbox" />
        <label className="toolbar-label inline" for="vehicle1"> Full Time Only</label>
      </div>

      <button>Search</button>
    </div>
  );
}

export default JobListToolbar;
