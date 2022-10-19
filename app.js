const add = require('./add')
const read = require('./read')
const write = require('./write')
const present = require('./present')
const del = require('./del')
const update = require('./update')

//get user input
const cmd = process.argv

var note = {}

if(cmd[2] == 'add') {
    //build object
    note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    //get old note value
    var oldnote = read()
    //add note to note.txt
    add(note, oldnote)
}

if(cmd[2] == 'read') {
    present(read())
}

if(cmd[2] == 'delete') {
    //get oldnote = read
    const oldnote = read()
    //get id to delete from notes
    const id = cmd[3]

    del(id, oldnote)

    present(read())
}

if(cmd[2] === 'update') {
    const note = {
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    const oldnote = read()

    update(note, oldnote)

    present(read())
}
