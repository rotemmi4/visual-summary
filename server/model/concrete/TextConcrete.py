from model.db import sqlliteDButils
from model.dao import TextDAO


def insert_text(name, content):
    query = TextDAO.insert_text(name, content)
    val = (name, content)
    return sqlliteDButils.execute_run(query, val)

def update_text(id, name, content):
    query = TextDAO.update_text(id, name, content)
    return sqlliteDButils.execute_run(query)

def delete_text(id):
    query = TextDAO.delete_text(id)
    return sqlliteDButils.execute_run(query)

def get_text_by_id(id):
    query = TextDAO.get_text_by_id(id)
    return sqlliteDButils.execute_select(query)

def get_texts():
    query = TextDAO.get_texts()
    return sqlliteDButils.execute_select(query)
