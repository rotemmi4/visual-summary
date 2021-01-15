
def insert(name,text_id, visualiztion_id):
    return ("INSERT INTO tests values (?,?,?)", [name,text_id, visualiztion_id])

def delete(name,text_id, visualiztion_id):
    return ("DELETE FROM tests where name=? AND text_id=? AND visualiztion_id=?)", [name,text_id, visualiztion_id])

def get_test_by_id(name,text_id, visualiztion_id):
    return ("SELECT tests.name, texts.id as text_id, texts.name as text_name, texts.content, visualization.id as v_id, visualization.type, " +
            "visualiztion_properties.porperty_name, visualiztion_properties.property_values, visualiztion_properties.property_type " +
            "FROM tests " +
            "INNER JOIN texts ON tests.text_id = texts.id " +
            "INNER JOIN visualiztions ON tests.visualiztion_id = visualiztions.id " +
            "INNER JOIN visualiztion_properties ON " +
            "tests.name = visualiztion_properties.test_id AND " +
            "tests.text_id = visualiztion_properties.text_id AND " +
            "tests.visualiztion_id = visualiztion_properties.visualiztion_id " +
            "WHERE tests.name=? AND tests.text_id=? AND tests.visualiztion_id=?".format(name,text_id, visualiztion_id))
    #return ("SELECT * FROM tests where name=? AND text_id=? AND visualiztion_id=?".format(name,text_id, visualiztion_id))

def get_tests():
    return ("SELECT tests.name, texts.id as text_id, texts.name as text_name, texts.content, visualization.id as v_id, visualization.type, " +
            "visualiztion_properties.porperty_name, visualiztion_properties.property_values, visualiztion_properties.property_type " +
            "FROM tests " +
            "INNER JOIN texts ON tests.text_id = texts.id " +
            "INNER JOIN visualiztions ON tests.visualiztion_id = visualiztions.id " +
            "INNER JOIN visualiztion_properties ON " +
            "tests.name = visualiztion_properties.test_id AND " +
            "tests.text_id = visualiztion_properties.text_id AND " +
            "tests.visualiztion_id = visualiztion_properties.visualiztion_id")

