import React, {useEffect, useRef, useContext} from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'

const cockpit = ( props ) => {
    const btnClickRef = useRef(null);
    const context = useContext(AuthContext);
    useEffect(() => {
      console.log("[Cockpit.js] useEffect call");
      // setTimeout(() => {
      //   alert('[Cockpit.js] useEffect');
      // }, 1000)

      btnClickRef.current.click();
      return () => {
        console.log('[Cockpit.js] Cleanup');
      }
    }, []);

    useEffect(() => {
      console.log("[Cockpit.js] 2nd useEffect");
      return () => {
        console.log('[Cockpit.js] 2nd Cleanup');
      }
    })

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={btnClickRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
                <button onClick={context.login}>Log in</button>        
        </div>
    );
};

export default React.memo(cockpit);