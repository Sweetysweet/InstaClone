import React from 'react';
import User from './User';

const Users = () => {
    return (
        <div className="right">
            <User 
                src="https://avatanplus.com/files/effects/original/57b5c8aa9ab4f1569e17da8a.jpg"
                alt="man" 
                name="Scott"/>
            <div className="users__block">
                <User 
                    src="https://avatanplus.com/files/effects/original/57b5c8aa9ab4f1569e17da8a.jpg"    
                    alt="man" 
                    name="Scott"
                    min/>
                <User 
                    src="https://avatanplus.com/files/effects/original/57b5c8aa9ab4f1569e17da8a.jpg"    
                    alt="man" 
                    name="Scott"
                    min/>
                <User 
                    src="https://avatanplus.com/files/effects/original/57b5c8aa9ab4f1569e17da8a.jpg"    
                    alt="man" 
                    name="Scott"
                    min/>
                <User 
                    src="https://avatanplus.com/files/effects/original/57b5c8aa9ab4f1569e17da8a.jpg"    
                    alt="man" 
                    name="Scott"
                    min/>
            </div>
        </div>
    )
}
export default Users