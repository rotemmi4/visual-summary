import sqlite3
import json

db_loc = 'db/docDB.db'


def dict_factory(cursor, row):
    dic = {}
    for idx, col in enumerate(cursor.description):
        dic[col[0]] = row[idx]
    return dic


def execute_select(query):
    conn = sqlite3.connect(db_loc)
    conn.row_factory = dict_factory
    cursor = conn.cursor()
    cursor.execute(query)
    res = cursor.fetchall()
    data = json.dumps(res)
    conn.close()
    return res


def execute_run(query, val):
    conn = sqlite3.connect(db_loc)
    cursor = conn.cursor()
    cursor.execute(query, val)
    conn.commit()
    conn.close()


