const React = require('react')


function Show({log}){
    console.log(log)
    return (
      <div>
        <h1>{log.title}</h1>
        <p>{log.entry}</p>
        <p>{log.shipIsBroken ? "Ship is broken" : "Ship is not broken"}</p>
        <p>
          <a href="/captions-log">back</a>
        </p>
      </div>
    );
}

module.exports = Show