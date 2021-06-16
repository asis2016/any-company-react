import React, { Fragment } from 'react' 
import {ModelStatBase} from './ModelStat.style' 

interface ModelStatProps{
    title?:string
}

const ModelStat = ({title}:ModelStatProps): JSX.Element => { 

    const data = [
      {
        model: "Blog",
        total: "20",
      },
      {
        model: "Gallery",
        total: "50",
      },
      {
        model: "Testimonials",
        total: "30",
      },
    ];

return (
  <ModelStatBase>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="text-primary fw-bold m-0">{title}</h6>
        </div>
        <div className="card-body">
          {data.map((item, index)=>{
              return (
                <Fragment key={index}>
                  <h4 className="small fw-bold">
                    {item.model}
                    <span className="float-end">
                      {item.total}
                      {"%"}
                    </span>
                  </h4>
                  <div className="progress mb-4">
                    <div
                      className="progress-bar bg-info"
                      style={{ width: `${item.total}%` }}
                    >
                      <span className="visually-hidden">
                        {item.total}
                        {"%"}
                      </span>
                    </div>
                  </div>
                </Fragment>
              );
          })}
          </div>
      </div>
  </ModelStatBase>
); 
} 

export default ModelStat