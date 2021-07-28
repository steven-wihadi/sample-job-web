import { useState } from 'react';
import './job-list-toolbar.component.scss';

function JobListToolbar(props) {
  const [desc, setDesc] = useState('');
  const [loc, setLoc] = useState('');
  const [fullTime, setFullTime] = useState(false);

  const onSearch = () => {
    const result = { desc, loc, fullTime }
    props.onClickSearch(result);
  }

  return (
    <div className="job-list-toolbar-component">
      <div className="job-desc-section">
        <label className="toolbar-label">Job Description</label>
        <input className="toolbar-input" type="text" value={ desc } onChange={ (e) => setDesc(e.target.value) }/>
      </div>

      <div className="job-location-section">
        <label className="toolbar-label">Location</label>
        <input className="toolbar-input" type="text" value={ loc } onChange={ (e) => setLoc(e.target.value) } />
      </div>

      <div className='fulltime-section'>
        <input type="checkbox" value={ fullTime } onChange={ (e) => setFullTime(e.target.value) } />
        <label className="toolbar-label inline"> Full Time Only</label>
      </div>

      <button onClick={ onSearch }>Search</button>
    </div>
  );
}

export default JobListToolbar;
