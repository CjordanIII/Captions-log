const React = require('react')


module.exports = function New(){
    return(
    <form action="/captions-log" method="POST">
        <label htmlFor="title">Title: </label>
        <input type="text"  name="title"/>
        <label htmlFor="entry">Text Entry: </label>
        <input type="textarea" name="entry"/>
        <label htmlFor="ship-is-broken">Ship is broken</label>
        <input type="checkbox" name="shipIsBroken"/>
        <input type="submit"/>
    </form>)
}