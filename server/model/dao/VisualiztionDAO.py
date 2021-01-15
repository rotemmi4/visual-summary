
def insert(type):
    return ("INSERT INTO visualizations (type) values (?)", [type])

def update(id, type):
    return ("UPDATE visualizations set type=? where id=?)", [type, id])

def delete(id):
    return ("DELETE FROM visualizations where id=?)", [id])

def get_visualiztion_by_id(id):
    return ("SELECT * FROM visualizations WHERE id={}".format(id))

def get_visualiztion_by_type(type):
    return ("SELECT id FROM visualiztions WHERE type = {}".format(type))

def get_visualiztions():
    return ("SELECT * FROM visualizations")