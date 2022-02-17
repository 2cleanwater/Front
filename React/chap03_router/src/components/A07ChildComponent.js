
import React from 'react';
import { Route, Link } from 'react-router-dom';

const A05ChildComponent = () => {

    return (
        <div>
            <h5>Children Component</h5>
            <div>This is Children Component</div>
            <br />
            
            <div>
                <Link to="/child">ONE</Link> | &nbsp; 
                <Link to="/child/two/100"> TWO</Link> |  &nbsp;
                <Link to="/child/three"> THREE</Link>
            </div>
            
            <hr />

            {/* 상위 패스의 하위 패스 형태가 된다. 
                상위가 /child 의 경우 자식라우츠에서 path를 동일 이름으로 기술하면 기본 값으로 출력
            */}
            <Route path="/child"    exact       render={ () => (
                <div>
                    <h6>ONE Component</h6>
                    <div>This is one Component</div>    
                </div>
            )} />

            {/* 상위 path가 /child 이므로 항상 /child/하위패스명 형태로 기술해야 한다 */}
            <Route path="/child/two/:id"        render={ ({match}) => (
                <div>
                    <h6>TWO Component</h6>
                    <div>This is two Component</div>
                    <br />

                    <div>
                        Id: {match.params.id}
                    </div>
                </div>
            )} />

            <Route path="/child/three"          render={ () => (
                <div>
                    <h6>THREE Component</h6>
                    <div>This is three Component</div>    
                </div>
            )} />
        </div>
    )
}
export default A05ChildComponent;