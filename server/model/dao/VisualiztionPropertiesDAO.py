
def insert(test_id, text_id, visualization_id,property_name,property_value, property_type):
    return ("INSERT INTO visualiztion_properties values (?,?,?,?,?,?)".format(test_id, text_id, visualization_id,property_name,property_value, property_type))

def update(test_id, text_id, visualiztion_id,property_name,property_value, property_type):
    return ("UPDATE visualiztion_properties set property_value=?, property_type=? where test_id=? and text_id=? and visualiztion_id=? and property_name=?)", [property_value, property_type, test_id, text_id, visualiztion_id,property_name])

def delete(test_id, text_id, visualiztion_id,property_name):
    return ("DELETE FROM visualiztion_properties where test_id=? and text_id=? and visualiztion_id=? and property_name=?)", [test_id, text_id, visualiztion_id,property_name])

def get_answer_by_id(test_id, text_id, visualiztion_id,property_name):
    return ("SELECT * FROM visualiztion_properties where test_id=? and text_id=? and visualiztion_id=? and property_name=?".format(test_id, text_id, visualiztion_id,property_name))

def get_answers():
    return ("SELECT * FROM visualiztion_properties")