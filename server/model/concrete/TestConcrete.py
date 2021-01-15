from model.db import sqlliteDButils
from model.dao import TestDAO
from model.db.converters import visualization_properties as converter


def insert_text(name, content):
    query = TestDAO.insert(name, content)
    val = (name, content)
    return sqlliteDButils.execute_run(query, val)

def update_text(id, name, content):
    query = TestDAO.update(id, name, content)
    return sqlliteDButils.execute_run(query)

def delete_text(id):
    query = TestDAO.delete(id)
    return sqlliteDButils.execute_run(query)

def get_test_by_id(id):
    query = TestDAO.get_test_by_id(id)
    response = sqlliteDButils.execute_select(query)
    test =  {}
    if (response):
        test['name'] = response['name']
        test['text'] = {'id': response['text_id'],
                        'name': response['text_name'],
                        'content': response['content']
                        }
        visualization_properties = {}
        visualization_properties['id'] = response['v_id']
        visualization_properties['type'] = response['type']
        for row in response:
            visualization_properties[row['property_name']] = converter.convert(row['property_value'],row['property_name'])
        test['visualization'] = visualization_properties

        return test

def get_texts():
    query = TestDAO.get_texts()
    return sqlliteDButils.execute_select(query)
