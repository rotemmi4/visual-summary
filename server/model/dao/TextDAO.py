
def insert_text(name, content):
    return ("INSERT INTO texts (name, content) values (?, ?)")


def update_text(id, name, content):
    return ("UPDATE texts set name=?, content=? where id=?)", [name, content, id])

def delete_text(id):
    return ("DELETE FROM texts where id=?)", [id])

def get_text_by_id(id):
    return ("SELECT * FROM texts WHERE id={}".format(id))



def get_texts():
    return ("SELECT * FROM texts")