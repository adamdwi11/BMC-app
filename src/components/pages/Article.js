import React from 'react'
import { DataArticle } from '../../storage/Article';

export default function Article () {
    return (
        <>
          <div className='row'>
            {
                DataArticle.map((item) => (
                        <div className='col-12 col-lg-4' key={item.id}>
                            <div className="card mb-5">
                          <a target="_blank" rel="noopener noreferrer" href={item.link}>
                                <img src={item.images} className="card-img-top" style={{ height: 250 }} alt="..." />
                                </a>
                                <div className="card-body">
                                    <h5 className="card-title">{item.topic}</h5>
                                    <p className="card-text">{item.content}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            
                        </div>
                ))
            }
        </div>
        </>
    )
}