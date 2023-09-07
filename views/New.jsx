const React = require('react')


module.exports = function New(){
    return(
    <form action="/captions-log" method="POST">
        <label htmlFor="title">Title: </label>
        <input type="text" htmlFor="title"/>
        <label htmlFor="entry">Text Entry: </label>
        <input type="textarea" htmlFor="entry"/>
        <label htmlFor="ship-is-broken">Ship is broken</label>
        <input type="checkbox" htmlFor="ship-is-broken"/>
        <button>submit</button>
    </form>)
}