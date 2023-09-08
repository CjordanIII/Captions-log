const React = require('react')


function Index({getDb}){
    return(
    <div>
        <h1>Logs</h1>
        <ul>
            {
                getDb.map((data)=>{ return (
                  <li key={data._id}>
                    <a href={`/captions-log/create/${data._id}`}>{data.title}</a>
                    {/* Delete */}
                    <form method="POST" action={`/captions-log/create/${data._id}?_method=DELETE`}>
                      <input type="submit" value='Delete'/>
                    </form>
                  </li>

                )})
              
            }

        </ul>
    </div>)
}

module.exports = Index