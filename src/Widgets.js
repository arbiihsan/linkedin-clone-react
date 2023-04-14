import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import { FiberManualRecord as FiberManualRecordIcon } from '@mui/icons-material';


function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
        </div>

        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>

  )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("This is a news", "Trending - 1500 readers")}
        {newsArticle("This is another news", "Trending - 999 readers")}
        {newsArticle("This is a news too", "Trending - 777 readers")}
        {newsArticle("This is also a news", "Trending - 555 readers")}
        {newsArticle("This is just another news", "Trending - 222 readers")}
        {newsArticle("Yes, this is a news", "Trending - 11 readers")}
    </div>
  )
}

export default Widgets