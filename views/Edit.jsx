const React = require('react')

function Edit({ findLog }) {
  console.log(findLog);
  return (
    <form action={`/captions-log/edit/${findLog._id}?_method=PUT`} method="POST">
      <label htmlFor="title">Title: </label>
      <input type="text" name="title" defaultValue={`${findLog.title}`} />
      <label htmlFor="entry">Text Entry: </label>
      <input type="textarea" name="entry" defaultValue={`${findLog.entry}`} />
      <label htmlFor="ship-is-broken">Ship is broken</label>
      <input
        type="checkbox"
        name="shipIsBroken"
        defaultChecked={findLog.shipIsBroken}
      />
      <input type="submit" value="Update" />
    </form>
  );
}

module.exports = Edit