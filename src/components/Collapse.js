import React from 'react';

const Collapse = (props) => {

    return (
        <div>
                <a className="btn btn-success w-100" data-toggle="collapse" href={"#".concat(props.href)} role="button" aria-expanded="false" aria-controls="collapseExample">
                {props.children.props.cardTitle}
                </a>
            <div className="collapse" id={props.href}>
                <div className="card card-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Collapse;