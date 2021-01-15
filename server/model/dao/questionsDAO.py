
def insert(number_id, text_id, content):
    return ("INSERT INTO questions (number_id, text_id, content) values (?,?,?)", [number_id, text_id, content])

def update(number_id, text_id, content):
    return ("UPDATE questions set content=? where number_id=? AND text_id=?)", [content, number_id,text_id])

def delete(number_id, text_id):
    return ("DELETE FROM questions where number_id=? AND text_id=?)", [number_id, text_id])

def get_question_by_id(number_id, text_id):
    return ("SELECT * FROM questions WHERE number_id=? AND text_id=? ".format(number_id, text_id))

def get_questions():
    return ("SELECT * FROM questions")