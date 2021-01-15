
def insert(question_id, is_currect):
    return ("INSERT INTO answers (question_id, is_currect) values (?,?)", [question_id, is_currect])

def update(option_id, question_id, is_currect):
    return ("UPDATE answers set is_currect=? where option_id=? AND question_id=?)", [is_currect, option_id, question_id])

def delete(option_id, question_id):
    return ("DELETE FROM answers where option_id=? AND question_id=?)", [option_id, question_id])

def get_answer_by_id(option_id, question_id):
    return ("SELECT * FROM answers WHERE id=? AND question_id=?".format(option_id, question_id))

def get_answers():
    return ("SELECT * FROM answers")