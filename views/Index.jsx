const React = require('react')


function Index({getDb}){
    console.log(getDb)
    return(
    <div>
        <h1>Logs</h1>
        <ul>
            {
                getDb.map((data)=>{ return (
                  <li>
                    <a href="/captions-log/create">{data.title}</a>
                  </li>
                );})
            }
        </ul>
    </div>)
}

module.exports = Index